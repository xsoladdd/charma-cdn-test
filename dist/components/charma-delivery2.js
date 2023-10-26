import { Env, proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as deliveryState, w as widgetState } from './index2.js';
import { i as instance } from './i18next.js';
import { z } from './index3.js';
import { j as joinClass } from './joinClass.js';
import { d as defineCustomElement$3 } from './charma-dropdown2.js';
import { d as defineCustomElement$2 } from './charma-input2.js';
import { d as defineCustomElement$1 } from './charma-textarea2.js';

// eslint-lint-disable-next-line @typescript-eslint/naming-convention
class HTTPError extends Error {
    constructor(response, request, options) {
        const code = (response.status || response.status === 0) ? response.status : '';
        const title = response.statusText || '';
        const status = `${code} ${title}`.trim();
        const reason = status ? `status code ${status}` : 'an unknown error';
        super(`Request failed with ${reason}`);
        Object.defineProperty(this, "response", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = 'HTTPError';
        this.response = response;
        this.request = request;
        this.options = options;
    }
}

class TimeoutError extends Error {
    constructor(request) {
        super('Request timed out');
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = 'TimeoutError';
        this.request = request;
    }
}

// eslint-disable-next-line @typescript-eslint/ban-types
const isObject = (value) => value !== null && typeof value === 'object';

const validateAndMerge = (...sources) => {
    for (const source of sources) {
        if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
            throw new TypeError('The `options` argument must be an object');
        }
    }
    return deepMerge({}, ...sources);
};
const mergeHeaders = (source1 = {}, source2 = {}) => {
    const result = new globalThis.Headers(source1);
    const isHeadersInstance = source2 instanceof globalThis.Headers;
    const source = new globalThis.Headers(source2);
    for (const [key, value] of source.entries()) {
        if ((isHeadersInstance && value === 'undefined') || value === undefined) {
            result.delete(key);
        }
        else {
            result.set(key, value);
        }
    }
    return result;
};
// TODO: Make this strongly-typed (no `any`).
const deepMerge = (...sources) => {
    let returnValue = {};
    let headers = {};
    for (const source of sources) {
        if (Array.isArray(source)) {
            if (!Array.isArray(returnValue)) {
                returnValue = [];
            }
            returnValue = [...returnValue, ...source];
        }
        else if (isObject(source)) {
            for (let [key, value] of Object.entries(source)) {
                if (isObject(value) && key in returnValue) {
                    value = deepMerge(returnValue[key], value);
                }
                returnValue = { ...returnValue, [key]: value };
            }
            if (isObject(source.headers)) {
                headers = mergeHeaders(headers, source.headers);
                returnValue.headers = headers;
            }
        }
    }
    return returnValue;
};

const supportsRequestStreams = (() => {
    let duplexAccessed = false;
    let hasContentType = false;
    const supportsReadableStream = typeof globalThis.ReadableStream === 'function';
    const supportsRequest = typeof globalThis.Request === 'function';
    if (supportsReadableStream && supportsRequest) {
        hasContentType = new globalThis.Request('https://a.com', {
            body: new globalThis.ReadableStream(),
            method: 'POST',
            // @ts-expect-error - Types are outdated.
            get duplex() {
                duplexAccessed = true;
                return 'half';
            },
        }).headers.has('Content-Type');
    }
    return duplexAccessed && !hasContentType;
})();
const supportsAbortController = typeof globalThis.AbortController === 'function';
const supportsResponseStreams = typeof globalThis.ReadableStream === 'function';
const supportsFormData = typeof globalThis.FormData === 'function';
const requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
const responseTypes = {
    json: 'application/json',
    text: 'text/*',
    formData: 'multipart/form-data',
    arrayBuffer: '*/*',
    blob: '*/*',
};
// The maximum value of a 32bit int (see issue #117)
const maxSafeTimeout = 2147483647;
const stop = Symbol('stop');

const normalizeRequestMethod = (input) => requestMethods.includes(input) ? input.toUpperCase() : input;
const retryMethods = ['get', 'put', 'head', 'delete', 'options', 'trace'];
const retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
const retryAfterStatusCodes = [413, 429, 503];
const defaultRetryOptions = {
    limit: 2,
    methods: retryMethods,
    statusCodes: retryStatusCodes,
    afterStatusCodes: retryAfterStatusCodes,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
};
const normalizeRetryOptions = (retry = {}) => {
    if (typeof retry === 'number') {
        return {
            ...defaultRetryOptions,
            limit: retry,
        };
    }
    if (retry.methods && !Array.isArray(retry.methods)) {
        throw new Error('retry.methods must be an array');
    }
    if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
        throw new Error('retry.statusCodes must be an array');
    }
    return {
        ...defaultRetryOptions,
        ...retry,
        afterStatusCodes: retryAfterStatusCodes,
    };
};

// `Promise.race()` workaround (#91)
async function timeout(request, abortController, options) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            if (abortController) {
                abortController.abort();
            }
            reject(new TimeoutError(request));
        }, options.timeout);
        void options
            .fetch(request)
            .then(resolve)
            .catch(reject)
            .then(() => {
            clearTimeout(timeoutId);
        });
    });
}

// DOMException is supported on most modern browsers and Node.js 18+.
// @see https://developer.mozilla.org/en-US/docs/Web/API/DOMException#browser_compatibility
const isDomExceptionSupported = Boolean(globalThis.DOMException);
// TODO: When targeting Node.js 18, use `signal.throwIfAborted()` (https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/throwIfAborted)
function composeAbortError(signal) {
    /*
    NOTE: Use DomException with AbortError name as specified in MDN docs (https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort)
    > When abort() is called, the fetch() promise rejects with an Error of type DOMException, with name AbortError.
    */
    if (isDomExceptionSupported) {
        return new DOMException(signal?.reason ?? 'The operation was aborted.', 'AbortError');
    }
    // DOMException not supported. Fall back to use of error and override name.
    const error = new Error(signal?.reason ?? 'The operation was aborted.');
    error.name = 'AbortError';
    return error;
}

// https://github.com/sindresorhus/delay/tree/ab98ae8dfcb38e1593286c94d934e70d14a4e111
async function delay(ms, { signal }) {
    return new Promise((resolve, reject) => {
        if (signal) {
            if (signal.aborted) {
                reject(composeAbortError(signal));
                return;
            }
            signal.addEventListener('abort', handleAbort, { once: true });
        }
        function handleAbort() {
            reject(composeAbortError(signal));
            clearTimeout(timeoutId);
        }
        const timeoutId = setTimeout(() => {
            signal?.removeEventListener('abort', handleAbort);
            resolve();
        }, ms);
    });
}

class Ky {
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    static create(input, options) {
        const ky = new Ky(input, options);
        const fn = async () => {
            if (ky._options.timeout > maxSafeTimeout) {
                throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
            }
            // Delay the fetch so that body method shortcuts can set the Accept header
            await Promise.resolve();
            let response = await ky._fetch();
            for (const hook of ky._options.hooks.afterResponse) {
                // eslint-disable-next-line no-await-in-loop
                const modifiedResponse = await hook(ky.request, ky._options, ky._decorateResponse(response.clone()));
                if (modifiedResponse instanceof globalThis.Response) {
                    response = modifiedResponse;
                }
            }
            ky._decorateResponse(response);
            if (!response.ok && ky._options.throwHttpErrors) {
                let error = new HTTPError(response, ky.request, ky._options);
                for (const hook of ky._options.hooks.beforeError) {
                    // eslint-disable-next-line no-await-in-loop
                    error = await hook(error);
                }
                throw error;
            }
            // If `onDownloadProgress` is passed, it uses the stream API internally
            /* istanbul ignore next */
            if (ky._options.onDownloadProgress) {
                if (typeof ky._options.onDownloadProgress !== 'function') {
                    throw new TypeError('The `onDownloadProgress` option must be a function');
                }
                if (!supportsResponseStreams) {
                    throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                }
                return ky._stream(response.clone(), ky._options.onDownloadProgress);
            }
            return response;
        };
        const isRetriableMethod = ky._options.retry.methods.includes(ky.request.method.toLowerCase());
        const result = (isRetriableMethod ? ky._retry(fn) : fn());
        for (const [type, mimeType] of Object.entries(responseTypes)) {
            result[type] = async () => {
                // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                ky.request.headers.set('accept', ky.request.headers.get('accept') || mimeType);
                const awaitedResult = await result;
                const response = awaitedResult.clone();
                if (type === 'json') {
                    if (response.status === 204) {
                        return '';
                    }
                    const arrayBuffer = await response.clone().arrayBuffer();
                    const responseSize = arrayBuffer.byteLength;
                    if (responseSize === 0) {
                        return '';
                    }
                    if (options.parseJson) {
                        return options.parseJson(await response.text());
                    }
                }
                return response[type]();
            };
        }
        return result;
    }
    // eslint-disable-next-line complexity
    constructor(input, options = {}) {
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "abortController", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_retryCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._input = input;
        this._options = {
            // TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
            credentials: this._input.credentials || 'same-origin',
            ...options,
            headers: mergeHeaders(this._input.headers, options.headers),
            hooks: deepMerge({
                beforeRequest: [],
                beforeRetry: [],
                beforeError: [],
                afterResponse: [],
            }, options.hooks),
            method: normalizeRequestMethod(options.method ?? this._input.method),
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            prefixUrl: String(options.prefixUrl || ''),
            retry: normalizeRetryOptions(options.retry),
            throwHttpErrors: options.throwHttpErrors !== false,
            timeout: typeof options.timeout === 'undefined' ? 10000 : options.timeout,
            fetch: options.fetch ?? globalThis.fetch.bind(globalThis),
        };
        if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globalThis.Request)) {
            throw new TypeError('`input` must be a string, URL, or Request');
        }
        if (this._options.prefixUrl && typeof this._input === 'string') {
            if (this._input.startsWith('/')) {
                throw new Error('`input` must not begin with a slash when using `prefixUrl`');
            }
            if (!this._options.prefixUrl.endsWith('/')) {
                this._options.prefixUrl += '/';
            }
            this._input = this._options.prefixUrl + this._input;
        }
        if (supportsAbortController) {
            this.abortController = new globalThis.AbortController();
            if (this._options.signal) {
                const originalSignal = this._options.signal;
                this._options.signal.addEventListener('abort', () => {
                    this.abortController.abort(originalSignal.reason);
                });
            }
            this._options.signal = this.abortController.signal;
        }
        if (supportsRequestStreams) {
            // @ts-expect-error - Types are outdated.
            this._options.duplex = 'half';
        }
        this.request = new globalThis.Request(this._input, this._options);
        if (this._options.searchParams) {
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const textSearchParams = typeof this._options.searchParams === 'string'
                ? this._options.searchParams.replace(/^\?/, '')
                : new URLSearchParams(this._options.searchParams).toString();
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const searchParams = '?' + textSearchParams;
            const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
            // To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one
            if (((supportsFormData && this._options.body instanceof globalThis.FormData)
                || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
                this.request.headers.delete('content-type');
            }
            // The spread of `this.request` is required as otherwise it misses the `duplex` option for some reason and throws.
            this.request = new globalThis.Request(new globalThis.Request(url, { ...this.request }), this._options);
        }
        if (this._options.json !== undefined) {
            this._options.body = JSON.stringify(this._options.json);
            this.request.headers.set('content-type', this._options.headers.get('content-type') ?? 'application/json');
            this.request = new globalThis.Request(this.request, { body: this._options.body });
        }
    }
    _calculateRetryDelay(error) {
        this._retryCount++;
        if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
            if (error instanceof HTTPError) {
                if (!this._options.retry.statusCodes.includes(error.response.status)) {
                    return 0;
                }
                const retryAfter = error.response.headers.get('Retry-After');
                if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
                    let after = Number(retryAfter);
                    if (Number.isNaN(after)) {
                        after = Date.parse(retryAfter) - Date.now();
                    }
                    else {
                        after *= 1000;
                    }
                    if (typeof this._options.retry.maxRetryAfter !== 'undefined' && after > this._options.retry.maxRetryAfter) {
                        return 0;
                    }
                    return after;
                }
                if (error.response.status === 413) {
                    return 0;
                }
            }
            const BACKOFF_FACTOR = 0.3;
            return Math.min(this._options.retry.backoffLimit, BACKOFF_FACTOR * (2 ** (this._retryCount - 1)) * 1000);
        }
        return 0;
    }
    _decorateResponse(response) {
        if (this._options.parseJson) {
            response.json = async () => this._options.parseJson(await response.text());
        }
        return response;
    }
    async _retry(fn) {
        try {
            return await fn();
            // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch
        }
        catch (error) {
            const ms = Math.min(this._calculateRetryDelay(error), maxSafeTimeout);
            if (ms !== 0 && this._retryCount > 0) {
                await delay(ms, { signal: this._options.signal });
                for (const hook of this._options.hooks.beforeRetry) {
                    // eslint-disable-next-line no-await-in-loop
                    const hookResult = await hook({
                        request: this.request,
                        options: this._options,
                        error: error,
                        retryCount: this._retryCount,
                    });
                    // If `stop` is returned from the hook, the retry process is stopped
                    if (hookResult === stop) {
                        return;
                    }
                }
                return this._retry(fn);
            }
            throw error;
        }
    }
    async _fetch() {
        for (const hook of this._options.hooks.beforeRequest) {
            // eslint-disable-next-line no-await-in-loop
            const result = await hook(this.request, this._options);
            if (result instanceof Request) {
                this.request = result;
                break;
            }
            if (result instanceof Response) {
                return result;
            }
        }
        if (this._options.timeout === false) {
            return this._options.fetch(this.request.clone());
        }
        return timeout(this.request.clone(), this.abortController, this._options);
    }
    /* istanbul ignore next */
    _stream(response, onDownloadProgress) {
        const totalBytes = Number(response.headers.get('content-length')) || 0;
        let transferredBytes = 0;
        if (response.status === 204) {
            if (onDownloadProgress) {
                onDownloadProgress({ percent: 1, totalBytes, transferredBytes }, new Uint8Array());
            }
            return new globalThis.Response(null, {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
            });
        }
        return new globalThis.Response(new globalThis.ReadableStream({
            async start(controller) {
                const reader = response.body.getReader();
                if (onDownloadProgress) {
                    onDownloadProgress({ percent: 0, transferredBytes: 0, totalBytes }, new Uint8Array());
                }
                async function read() {
                    const { done, value } = await reader.read();
                    if (done) {
                        controller.close();
                        return;
                    }
                    if (onDownloadProgress) {
                        transferredBytes += value.byteLength;
                        const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
                        onDownloadProgress({ percent, transferredBytes, totalBytes }, value);
                    }
                    controller.enqueue(value);
                    await read();
                }
                await read();
            },
        }), {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
        });
    }
}

/*! MIT License © Sindre Sorhus */
const createInstance = (defaults) => {
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const ky = (input, options) => Ky.create(input, validateAndMerge(defaults, options));
    for (const method of requestMethods) {
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        ky[method] = (input, options) => Ky.create(input, validateAndMerge(defaults, options, { method }));
    }
    ky.create = (newDefaults) => createInstance(validateAndMerge(newDefaults));
    ky.extend = (newDefaults) => createInstance(validateAndMerge(defaults, newDefaults));
    ky.stop = stop;
    return ky;
};
const ky = createInstance();

const querySchema = z
  .object({
  page: z.number().optional(),
  take: z.number().optional(),
  order: z.union([z.literal('asc'), z.literal('desc')]).optional(),
})
  .optional();
const baseUrlSchema = z.string().url();
const deliverySchema = z.object({
  type: z.union([z.string(), z.enum(['personal', 'company'])]),
  givenName: z
    .string()
    .optional()
    .nullable()
    .transform(val => (val === null ? '' : val))
    .refine(val => val !== undefined, { message: 'errors.formError' }),
  familyName: z
    .string()
    .optional()
    .nullable()
    .transform(val => (val === null ? '' : val))
    .refine(val => val !== undefined, { message: 'errors.forms.required' }),
  organizationName: z
    .string()
    .optional()
    .nullable()
    .transform(val => (val === null ? '' : val))
    .refine(val => val !== undefined, { message: 'errors.forms.required' }),
  city: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  country: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  phone: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  email: z
    .string()
    .email('errors.forms.invalidEmail')
    .refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  careOf: z
    .string()
    .optional()
    .nullable()
    .transform(val => (val === null ? '' : val)),
  postalCode: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  streetAddress: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  streetAddress2: z
    .string()
    .optional()
    .nullable()
    .transform(val => (val === null ? '' : val)),
});
const billingSchema = z.object({
  city: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  country: z.string(),
  organizationRegistrationId: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  email: z
    .string()
    .email('errors.forms.invalidEmail')
    .refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  organizationName: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  postalCode: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  invoiceType: z.union([z.literal('electronic'), z.literal('postal'), z.literal('PDF'), z.string()]),
});
z.object({
  lines: z.array(z.object({
    productId: z.string().uuid(),
    productGroupId: z.string().uuid(),
    count: z.number(),
  })),
  billing: billingSchema,
  delivery: deliverySchema,
  customerInfo: z.object({
    givenName: z.string(),
    familyName: z.string(),
    email: z.string().email(),
    phone: z.string(),
  }),
  siteId: z.string().uuid(),
});
const countriesSchema = z.array(z.object({
  id: z.string().uuid(),
  iso: z.string(),
  nicename: z.string(),
}));
z.object({
  id: z.string().uuid(),
  active: z.boolean(),
  name: z.string(),
  billingAddress: billingSchema.optional(),
  shippingAddress: deliverySchema.optional(),
  countries: countriesSchema,
});
const ApiKeySchema = z.string({
  required_error: `Charma API Key is required!
 You must run init function to set a key`,
});
const openWidgetSchema = z.object({
  delivery: deliverySchema.optional(),
  billing: billingSchema.optional(),
  productId: z.string().optional(),
});

class CharmaAPI {
  constructor() {
    this.baseUrl = `${Env.API_BASE_URL}`;
  }
  async init(key) {
    const keyData = ApiKeySchema.safeParse(key);
    if (!keyData.success)
      throw new Error('Key is invalid');
    this.key = keyData.data;
    this.api = ky.create({
      prefixUrl: this.baseUrl,
      headers: { Authorization: `Bearer ${this.key}` },
      timeout: 6000,
    });
    const invalidKeyEvent = new CustomEvent('invalid-charma-key', {
      bubbles: true,
    });
    return await this.getKey()
      .then(res => {
      if (!res.active) {
        this.api = null;
        document.body.dispatchEvent(invalidKeyEvent);
        throw new Error('Charma API Key is invalid!');
      }
      return this.getCountries().then(data => {
        this.keyMetadata = Object.assign(Object.assign({}, res), { countries: data });
      });
    })
      .catch(_err => {
      this.api = null;
      document.body.dispatchEvent(invalidKeyEvent);
      throw new Error('Charma API Key is invalid!');
    });
  }
  setBaseUrl(baseUrl) {
    if (baseUrlSchema.safeParse(baseUrl).success) {
      this.baseUrl = baseUrl;
    }
    else {
      throw new Error('baseUrl is not valid URL!');
    }
  }
  async getCategories(query) {
    try {
      const parsedQuery = querySchema.parse(query);
      const res = await this.api.get('categories', {
        searchParams: parsedQuery,
      });
      return await res.json();
    }
    catch (error) {
      if (error.name === 'HTTPError') {
        return await error.response.json();
      }
    }
  }
  async getCountries() {
    try {
      const res = await this.api.get('countries');
      const resJson = await res.json();
      return resJson.countries;
    }
    catch (error) {
      if (error.name === 'HTTPError') {
        return await error.response.json();
      }
    }
  }
  async getBrands(query) {
    try {
      const parsedQuery = querySchema.parse(query);
      const res = await this.api.get('brands', {
        searchParams: parsedQuery,
      });
      return await res.json();
    }
    catch (error) {
      if (error.name === 'HTTPError') {
        return await error.response.json();
      }
    }
  }
  async getProducts(query) {
    try {
      const parsedQuery = querySchema.parse(query);
      const res = await this.api.get('products', {
        searchParams: parsedQuery,
      });
      return await res.json();
    }
    catch (error) {
      if (error.name === 'HTTPError') {
        return await error.response.json();
      }
    }
  }
  async getProduct(id) {
    if (!id)
      throw new Error('Product ID is required');
    try {
      const res = await this.api.get(`products/${id}`);
      return await res.json();
    }
    catch (error) {
      if (error.name === 'HTTPError') {
        return await error.response.json();
      }
    }
  }
  async getOrder(orderNumber) {
    if (!orderNumber)
      throw new Error('Order Number is required');
    try {
      const res = this.api.get(`orders/${orderNumber}`);
      return await res.json();
    }
    catch (error) {
      if (error.name === 'HTTPError') {
        return await error.response.json();
      }
    }
  }
  async getOrders(query) {
    try {
      const parsedQuery = querySchema.parse(query);
      const res = this.api.get(`orders`, {
        searchParams: parsedQuery,
      });
      return await res.json();
    }
    catch (error) {
      if (error.name === 'HTTPError') {
        return await error.response.json();
      }
    }
  }
  async createOrder(order) {
    try {
      const res = await this.api.post(`order`, {
        json: order,
      });
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      return await res.json();
    }
    catch (error) {
      if (error.name === 'HTTPError') {
        return await error.response.json();
      }
      return await error;
    }
  }
  async getKey() {
    try {
      const res = await this.api.get(`get-key/${this.key}`);
      return await res.json();
    }
    catch (error) {
      if (error.name === 'HTTPError') {
        return await error.response.json();
      }
    }
  }
}

class Widget {
  async init(key) {
    if (!key.trim().length) {
      throw new Error('Widget key cannot be empty');
    }
    if (!this.charmaAPI) {
      this.charmaAPI = charmaAPI;
    }
    await this.charmaAPI.init(key);
  }
  setAPIBaseUrl(url) {
    charmaAPI.setBaseUrl(url);
  }
  setDeliveryData(deliveryData) {
    const delivery = deliverySchema.safeParse(deliveryData);
    if (!delivery.success) {
      throw new Error('Invalid delivery data');
    }
    Object.assign(deliveryState, delivery.data);
  }
  show(data) {
    let eventData;
    if (data) {
      const result = openWidgetSchema.safeParse(data);
      if (!result.success) {
        throw new Error('Invalid widget data! You must pass valid delivery or billing data.');
      }
      if (Object.keys(result.data).length) {
        eventData = result.data;
      }
      if (result.data.productId) {
        widgetState.preselectedProduct = result.data.productId;
      }
    }
    const openEvent = new CustomEvent('charma-widget-open', {
      bubbles: true,
      detail: eventData,
    });
    document.body.dispatchEvent(openEvent);
  }
  close() {
    const closeEvent = new CustomEvent('charma-widget-close', {
      bubbles: true,
    });
    document.body.dispatchEvent(closeEvent);
  }
}

const charmaAPI = new CharmaAPI();
const widget = new Widget();

const charmaDeliveryCss = "/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }:root{--main-bg-color:#b88d48}*{font-style:\"Nunito Sans', sans-serif\"}:host{all:initial}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.static{position:static}.relative{position:relative}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.flex{display:flex}.grid{display:grid}.aspect-square{aspect-ratio:1/1}.h-4{height:1rem}.w-4{width:1rem}.w-\\[160px\\]{width:160px}.cursor-pointer{cursor:pointer}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.place-content-center{place-content:center}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-2{border-width:2px}.border-black\\/50{border-color:rgba(0,0,0,.5)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-4{padding:1rem}.p-6{padding:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.font-ns{font-family:sans-serif}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.leading-none{line-height:1}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.delay-0{transition-delay:0s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}@media (min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.absolute{position:absolute}.top-\\[3\\.6rem\\]{top:3.6rem}.z-50{z-index:50}.h-9{height:2.25rem}.max-h-\\[150px\\]{max-height:150px}.w-full{width:100%}.gap-2{gap:.5rem}.overflow-scroll{overflow:scroll}.rounded-sm{border-radius:.125rem}.bg-transparent{background-color:transparent}.px-1{padding-left:.25rem;padding-right:.25rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-\\[15px\\]{padding-left:15px;padding-right:15px}.py-1{padding-bottom:.25rem;padding-top:.25rem}.capitalize{text-transform:capitalize}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.opacity-50{opacity:.5}.shadow,.shadow-sm{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.drop-shadow-sm{--tw-drop-shadow:drop-shadow(0 1px 1px rgba(0,0,0,.05));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover\\:bg-\\[\\#e2e2e2\\]:hover{--tw-bg-opacity:1;background-color:rgb(226 226 226/var(--tw-bg-opacity))}.focus\\:ring-1:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.gap-1{gap:.25rem}.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.border-red-500{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity))}.text-xs{font-size:.75rem;line-height:1rem}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.file\\:border-0::file-selector-button{border-width:0}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.min-h-\\[60px\\]{min-height:60px}.visible{visibility:visible}.invisible{visibility:hidden}.fixed{position:fixed}.left-0{left:0}.top-0{top:0}.z-\\[9998\\]{z-index:9998}.inline-flex{display:inline-flex}.hidden{display:none}.h-3{height:.75rem}.h-\\[0px\\]{height:0}.h-\\[20px\\]{height:20px}.h-\\[40px\\]{height:40px}.h-\\[50px\\]{height:50px}.h-\\[92\\%\\]{height:92%}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[800px\\]{max-height:800px}.w-3{width:.75rem}.w-\\[0px\\]{width:0}.w-\\[20px\\]{width:20px}.w-\\[40px\\]{width:40px}.w-screen{width:100vw}.max-w-\\[1200px\\]{max-width:1200px}.max-w-\\[300px\\]{max-width:300px}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-default{cursor:default}.place-items-start{place-items:start}.place-items-center{place-items:center}.justify-center{justify-content:center}.gap-\\[30px\\]{gap:30px}.gap-\\[3px\\]{gap:3px}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-scroll{overflow-y:scroll}.overscroll-contain{overscroll-behavior:contain}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-xl{border-radius:.75rem}.border-\\[1px\\]{border-width:1px}.border-\\[\\#000\\],.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-\\[\\#00000080\\]{background-color:#00000080}.bg-\\[\\#F9F6F6\\]{--tw-bg-opacity:1;background-color:rgb(249 246 246/var(--tw-bg-opacity))}.bg-black{background-color:rgb(0 0 0/var(--tw-bg-opacity))}.bg-black,.bg-gray-500{--tw-bg-opacity:1}.bg-gray-500{background-color:rgb(107 114 128/var(--tw-bg-opacity))}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[20px\\]{padding-left:20px;padding-right:20px}.px-\\[25px\\]{padding-left:25px;padding-right:25px}.px-\\[8px\\]{padding-left:8px;padding-right:8px}.py-4{padding-bottom:1rem;padding-top:1rem}.py-\\[20px\\]{padding-bottom:20px;padding-top:20px}.py-\\[30px\\]{padding-bottom:30px;padding-top:30px}.py-\\[8px\\]{padding-bottom:8px;padding-top:8px}.pl-\\[16px\\]{padding-left:16px}.pt-\\[10px\\]{padding-top:10px}.pt-\\[300px\\]{padding-top:300px}.text-\\[10px\\]{font-size:10px}.text-\\[16px\\]{font-size:16px}.text-\\[18px\\]{font-size:18px}.font-semibold{font-weight:600}.leading-6{line-height:1.5rem}.text-\\[\\#4F4F4F\\]{--tw-text-opacity:1;color:rgb(79 79 79/var(--tw-text-opacity))}.text-black{color:rgb(0 0 0/var(--tw-text-opacity))}.text-black,.text-red-500,.text-white{--tw-text-opacity:1}.text-white{color:rgb(255 255 255/var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover\\:bg-black\\/90:hover{background-color:rgba(0,0,0,.9)}.hover\\:bg-white\\/90:hover{background-color:hsla(0,0%,100%,.9)}.disabled\\:pointer-events-none:disabled{pointer-events:none}@media (min-width:640px){.sm\\:flex{display:flex}}.mb-\\[5px\\]{margin-bottom:5px}.block{display:block}.h-5{height:1.25rem}.h-\\[100px\\]{height:100px}.h-\\[180px\\]{height:180px}.h-\\[70px\\]{height:70px}.h-\\[90px\\]{height:90px}.min-h-\\[100px\\]{min-height:100px}.w-5{width:1.25rem}.w-\\[142px\\]{width:142px}.w-\\[220px\\]{width:220px}.w-\\[240px\\]{width:240px}.gap-\\[\\.35rem\\]{gap:.35rem}.border-\\[\\#000\\]{--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.px-\\[10px\\]{padding-left:10px;padding-right:10px}.py-\\[10px\\]{padding-bottom:10px;padding-top:10px}.pt-\\[5px\\]{padding-top:5px}.text-\\[12px\\]{font-size:12px}.text-\\[14px\\]{font-size:14px}.font-light{font-weight:300}.font-normal{font-weight:400}.text-\\[\\#5E5E5E\\]{--tw-text-opacity:1;color:rgb(94 94 94/var(--tw-text-opacity))}.text-\\[\\#727272\\]{color:rgb(114 114 114/var(--tw-text-opacity))}.text-\\[\\#727272\\],.text-black,.text-gray-300{--tw-text-opacity:1}.text-gray-300{color:rgb(209 213 219/var(--tw-text-opacity))}.duration-100{transition-duration:.1s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.hover\\:border-\\[\\#a7a7a7\\]:hover{--tw-border-opacity:1;border-color:rgb(167 167 167/var(--tw-border-opacity))}.hover\\:ease-in:hover{transition-timing-function:cubic-bezier(.4,0,1,1)}@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@300;400;600&family=Raleway:wght@300;400;500&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700&display=swap\")";

const CharmaDelivery = /*@__PURE__*/ proxyCustomElement(class CharmaDelivery extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.options = charmaAPI.keyMetadata.countries.map(country => ({
      label: country.nicename,
      value: country.iso,
    }));
    this.handleBlur = (e) => {
      var _a;
      const key = e.target['id'];
      if ((_a = widgetState.deliveryFormErrors) === null || _a === void 0 ? void 0 : _a[key]) {
        widgetState.deliveryFormErrors[key] = undefined;
        widgetState.error = undefined;
      }
    };
    this.language = undefined;
  }
  handleInputChange(e) {
    deliveryState[e.target.id] = e.detail;
  }
  getError(id) {
    var _a, _b, _c;
    return ((_b = (_a = widgetState.deliveryFormErrors) === null || _a === void 0 ? void 0 : _a[id]) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (_c = widgetState.deliveryFormErrors) === null || _c === void 0 ? void 0 : _c[id][0] : '';
  }
  render() {
    const shippingInfoType = (h("div", { class: "flex place-content-center" }, h("div", { role: "radiogroup", "aria-required": "false", dir: "ltr", class: " grid grid-cols-2 gap-4", tabindex: "0" }, h("div", { class: "w-[160px]" }, h("button", { type: "button", role: "radio", "aria-checked": "false", "data-state": "unchecked", value: "personal", class: "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only", id: "personal", tabindex: "-1", "data-radix-collection-item": "", onClick: () => {
        deliveryState.type = 'personal';
        deliveryState.organizationName = '';
      } }), h("label", { class: joinClass('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary font-ns cursor-pointer transition delay-0 duration-300 ease-in-out', deliveryState.type === 'personal' ? 'border-black/50' : ' '), htmlFor: "personal" }, h("div", { class: "py-2" }, h("svg", { width: "22", height: "22", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M0.5 8.10882L7.38769 1.2521C7.72615 0.915966 8.27385 0.915966 8.61154 1.2521L15.5 8.10882M2.23077 6.38603V14.1386C2.23077 14.6141 2.61846 15 3.09615 15H6.26923V11.2673C6.26923 10.7918 6.65692 10.4059 7.13462 10.4059H8.86538C9.34308 10.4059 9.73077 10.7918 9.73077 11.2673V15H12.9038C13.3815 15 13.7692 14.6141 13.7692 14.1386V6.38603M5.11538 15H11.4615", stroke: "black", "stroke-linecap": "round", "stroke-linejoin": "round" }))), instance.t('shippingInfromation.form.button.personal'))), h("div", null, h("button", { type: "button", role: "radio", "aria-checked": "false", "data-state": "unchecked", value: "company", class: "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only", id: "company", tabindex: "-1", "data-radix-collection-item": "", onClick: () => {
        deliveryState.givenName = '';
        deliveryState.familyName = '';
        deliveryState.type = 'company';
      } }), h("label", { class: joinClass('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary font-ns cursor-pointer transition delay-0 duration-300 ease-in-out', deliveryState.type === 'company' ? 'border-black/50' : ''), htmlFor: "company" }, h("div", { class: "py-2" }, h("svg", { width: "26", height: "22", viewBox: "0 0 20 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M0.816406 16H19.1838M2.22928 1V16M12.1194 1V16M17.7709 4.75V16M5.05503 4.125H5.76146M5.05503 6.625H5.76146M5.05503 9.125H5.76146M8.58721 4.125H9.29365M8.58721 6.625H9.29365M8.58721 9.125H9.29365M5.05503 16V13.1875C5.05503 12.67 5.52975 12.25 6.11468 12.25H8.23399C8.81892 12.25 9.29365 12.67 9.29365 13.1875V16M1.52284 1H12.8258M12.1194 4.75H18.4773M14.9451 7.875H14.9527V7.88167H14.9451V7.875ZM14.9451 10.375H14.9527V10.3817H14.9451V10.375ZM14.9451 12.875H14.9527V12.8817H14.9451V12.875Z", stroke: "black", "stroke-linecap": "round", "stroke-linejoin": "round" }))), instance.t('shippingInfromation.form.button.company'))))));
    return (h(Host, null, h("section", null, h("div", { class: "rounded-md p-6 mb-4 bg-white flex flex-col gap-3" }, h("div", { class: "" }, shippingInfoType), deliveryState.type === 'personal' ? (h("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, h("charma-input", { required: deliveryState.type === 'personal', value: deliveryState.givenName, onValueChange: this.handleInputChange, label: instance.t('shippingInfromation.form.given_name'), name: "givenName", id: "givenName", onBlur: this.handleBlur, error: this.getError('givenName') }), h("charma-input", { required: deliveryState.type === 'personal', value: deliveryState.familyName, onValueChange: this.handleInputChange, label: instance.t('shippingInfromation.form.family_name'), name: "familyName", id: "familyName", onBlur: this.handleBlur, error: this.getError('familyName') }))) : (h("div", { class: "grid grid-cols-1 gap-6 " }, h("charma-input", { required: deliveryState.type === 'company', value: deliveryState.organizationName, onValueChange: this.handleInputChange, label: instance.t('shippingInfromation.form.organization_name'), name: "organizationName", id: "organizationName", onBlur: this.handleBlur, error: this.getError('organizationName') }))), h("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, h("charma-input", { required: true, value: deliveryState.phone, onValueChange: this.handleInputChange, label: instance.t('shippingInfromation.form.phone'), name: "phone", id: "phone", onBlur: this.handleBlur, error: this.getError('phone') }), h("charma-input", { value: deliveryState.careOf, onValueChange: this.handleInputChange, label: instance.t('shippingInfromation.form.care_of'), name: "careOf", id: "careOf", onBlur: this.handleBlur, error: this.getError('careOf') })), h("div", { class: "" }, h("charma-input", { required: true, value: deliveryState.email, onValueChange: this.handleInputChange, label: instance.t('shippingInfromation.form.email'), name: "email", id: "email", onBlur: this.handleBlur, error: this.getError('email') })), h("div", { class: "" }, h("charma-input", { required: true, value: deliveryState.streetAddress, onValueChange: this.handleInputChange, label: instance.t('shippingInfromation.form.street_address'), name: "streetAddress", id: "streetAddress", onBlur: this.handleBlur, error: this.getError('streetAddress') })), h("div", { class: "" }, h("charma-input", { value: deliveryState.streetAddress2, onValueChange: this.handleInputChange, label: instance.t('shippingInfromation.form.street_address2'), name: "streetAddress2", id: "streetAddress2", onBlur: this.handleBlur, error: this.getError('streetAddress2') })), h("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, h("charma-input", { required: true, value: deliveryState.postalCode, onValueChange: this.handleInputChange, label: instance.t('shippingInfromation.form.postal_code'), name: "postalCode", id: "postalCode", onBlur: this.handleBlur, error: this.getError('postalCode') }), h("charma-input", { required: true, value: deliveryState.city, onValueChange: this.handleInputChange, label: instance.t('shippingInfromation.form.city'), name: "city", id: "city", onBlur: this.handleBlur, error: this.getError('city') })), h("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, h("charma-dropdown", { required: true, defaultValue: {
        label: 'Sweden',
        value: 'SE',
      }, onValueChange: e => {
        deliveryState.country = e.detail;
      }, label: instance.t('shippingInfromation.form.country'), name: "country", id: "country", options: this.options })), h("div", { class: "relative py-2 mb-2" }, h("charma-textarea", { label: instance.t('shippingInfromation.form.comment'), value: deliveryState.comment, onChange: (e) => {
        deliveryState.comment = e.target.value;
      }, name: "comment", id: "comment" }))))));
  }
  static get style() { return charmaDeliveryCss; }
}, [1, "charma-delivery", {
    "language": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["charma-delivery", "charma-dropdown", "charma-input", "charma-textarea"];
  components.forEach(tagName => { switch (tagName) {
    case "charma-delivery":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CharmaDelivery);
      }
      break;
    case "charma-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "charma-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "charma-textarea":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { CharmaDelivery as C, deliverySchema as a, billingSchema as b, charmaAPI as c, defineCustomElement as d, widget as w };

//# sourceMappingURL=charma-delivery2.js.map