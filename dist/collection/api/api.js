import { Env } from "@stencil/core";
import ky from "ky";
import { ApiKeySchema, baseUrlSchema, querySchema } from "./schemas";
export class CharmaAPI {
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
//# sourceMappingURL=api.js.map
