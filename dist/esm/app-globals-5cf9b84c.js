import { _ as _createClass, a as _classCallCheck, i as instance, w as widget, c as charmaAPI } from './index-a9d695e8.js';

var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

// eslint-disable-next-line no-control-regex
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var serializeCookie = function serializeCookie(name, val, options) {
  var opt = options || {};
  opt.path = opt.path || '/';
  var value = encodeURIComponent(val);
  var str = "".concat(name, "=").concat(value);
  if (opt.maxAge > 0) {
    var maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += "; Max-Age=".concat(Math.floor(maxAge));
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }
    str += "; Domain=".concat(opt.domain);
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }
    str += "; Path=".concat(opt.path);
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }
    str += "; Expires=".concat(opt.expires.toUTCString());
  }
  if (opt.httpOnly) str += '; HttpOnly';
  if (opt.secure) str += '; Secure';
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }
  return str;
};
var cookie = {
  create: function create(name, value, minutes, domain) {
    var cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      path: '/',
      sameSite: 'strict'
    };
    if (minutes) {
      cookieOptions.expires = new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1000);
    }
    if (domain) cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
  },
  read: function read(name) {
    var nameEQ = "".concat(name, "=");
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  remove: function remove(name) {
    this.create(name, '', -1);
  }
};
var cookie$1 = {
  name: 'cookie',
  lookup: function lookup(options) {
    var found;
    if (options.lookupCookie && typeof document !== 'undefined') {
      var c = cookie.read(options.lookupCookie);
      if (c) found = c;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== 'undefined') {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);
    }
  }
};

var querystring = {
  name: 'querystring',
  lookup: function lookup(options) {
    var found;
    if (typeof window !== 'undefined') {
      var search = window.location.search;
      if (!window.location.search && window.location.hash && window.location.hash.indexOf('?') > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf('?'));
      }
      var query = search.substring(1);
      var params = query.split('&');
      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf('=');
        if (pos > 0) {
          var key = params[i].substring(0, pos);
          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }
    return found;
  }
};

var hasLocalStorageSupport = null;
var localStorageAvailable = function localStorageAvailable() {
  if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;
  try {
    hasLocalStorageSupport = window !== 'undefined' && window.localStorage !== null;
    var testKey = 'i18next.translate.boo';
    window.localStorage.setItem(testKey, 'foo');
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
};
var localStorage = {
  name: 'localStorage',
  lookup: function lookup(options) {
    var found;
    if (options.lookupLocalStorage && localStorageAvailable()) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng) found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }
};

var hasSessionStorageSupport = null;
var sessionStorageAvailable = function sessionStorageAvailable() {
  if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;
  try {
    hasSessionStorageSupport = window !== 'undefined' && window.sessionStorage !== null;
    var testKey = 'i18next.translate.boo';
    window.sessionStorage.setItem(testKey, 'foo');
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
};
var sessionStorage = {
  name: 'sessionStorage',
  lookup: function lookup(options) {
    var found;
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      var lng = window.sessionStorage.getItem(options.lookupSessionStorage);
      if (lng) found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(options.lookupSessionStorage, lng);
    }
  }
};

var navigator$1 = {
  name: 'navigator',
  lookup: function lookup(options) {
    var found = [];
    if (typeof navigator !== 'undefined') {
      if (navigator.languages) {
        // chrome only; not an array, so can't use .push.apply instead of iterating
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }
      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }
      if (navigator.language) {
        found.push(navigator.language);
      }
    }
    return found.length > 0 ? found : undefined;
  }
};

var htmlTag = {
  name: 'htmlTag',
  lookup: function lookup(options) {
    var found;
    var htmlTag = options.htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);
    if (htmlTag && typeof htmlTag.getAttribute === 'function') {
      found = htmlTag.getAttribute('lang');
    }
    return found;
  }
};

var path = {
  name: 'path',
  lookup: function lookup(options) {
    var found;
    if (typeof window !== 'undefined') {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === 'number') {
          if (typeof language[options.lookupFromPathIndex] !== 'string') {
            return undefined;
          }
          found = language[options.lookupFromPathIndex].replace('/', '');
        } else {
          found = language[0].replace('/', '');
        }
      }
    }
    return found;
  }
};

var subdomain = {
  name: 'subdomain',
  lookup: function lookup(options) {
    // If given get the subdomain index else 1
    var lookupFromSubdomainIndex = typeof options.lookupFromSubdomainIndex === 'number' ? options.lookupFromSubdomainIndex + 1 : 1;
    // get all matches if window.location. is existing
    // first item of match is the match itself and the second is the first group macht which sould be the first subdomain match
    // is the hostname no public domain get the or option of localhost
    var language = typeof window !== 'undefined' && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);

    // if there is no match (null) return undefined
    if (!language) return undefined;
    // return the given group match
    return language[lookupFromSubdomainIndex];
  }
};

function getDefaults() {
  return {
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    // cache user language
    caches: ['localStorage'],
    excludeCacheFor: ['cimode']
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
  };
}
var Browser = /*#__PURE__*/function () {
  function Browser(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Browser);
    this.type = 'languageDetector';
    this.detectors = {};
    this.init(services, options);
  }
  _createClass(Browser, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services || {
        languageUtils: {}
      }; // this way the language detector can be used without i18next
      this.options = defaults(options, this.options || {}, getDefaults());

      // backwards compatibility
      if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage);
      this.addDetector(sessionStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
    }
  }, {
    key: "addDetector",
    value: function addDetector(detector) {
      this.detectors[detector.name] = detector;
    }
  }, {
    key: "detect",
    value: function detect(detectionOrder) {
      var _this = this;
      if (!detectionOrder) detectionOrder = this.options.order;
      var detected = [];
      detectionOrder.forEach(function (detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup = _this.detectors[detectorName].lookup(_this.options);
          if (lookup && typeof lookup === 'string') lookup = [lookup];
          if (lookup) detected = detected.concat(lookup);
        }
      });
      if (this.services.languageUtils.getBestMatchFromCodes) return detected; // new i18next v19.5.0
      return detected.length > 0 ? detected[0] : null; // a little backward compatibility
    }
  }, {
    key: "cacheUserLanguage",
    value: function cacheUserLanguage(lng, caches) {
      var _this2 = this;
      if (!caches) caches = this.options.caches;
      if (!caches) return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
      caches.forEach(function (cacheName) {
        if (_this2.detectors[cacheName]) _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }
  }]);
  return Browser;
}();
Browser.type = 'languageDetector';

const en = {
  translation: {
    widget_button: 'Send a gift',
    widget_button_disabled: 'Gift Sending Disabled',
    back: 'Back',
    next: 'Next',
    exit: 'Exit',
    loading_text: 'Preparing order...',
    order: 'Place Order',
    sideBar: {
      title: 'Welcome!',
      itemSelection: 'Item Selection',
      itemSelectionSubtitle: 'Select one or more items',
      billingAddress: 'Billing Address',
      billingAddressSubtitle: 'Add billing information',
      shippingAddress: 'Shipping Address',
      shippingAddressSubtitle: 'Add shipping information',
      confirmation: 'Confirmation',
      confirmationSubtitle: 'Double check everything',
      thankYou: 'Thank You',
      thankYouSubtitle: 'Your order has been placed succesfully',
    },
    productCard: {
      excludedVat: 'excluding VAT',
    },
    step_product: {
      title: 'Item Selection',
    },
    shippingInfromation: {
      title: 'Delivery Address',
      form: {
        button: {
          personal: 'Personal',
          company: 'Company',
        },
        organizationName: 'Organization name',
        given_name: 'Given Name',
        family_name: 'Family Name',
        phone: 'Phone Number',
        care_of: 'Care of',
        street_address: 'Street Address',
        street_address2: 'Street Address 2',
        postal_code: 'Postal Code',
        city: 'City',
        country: 'Country',
        comment: 'Comment',
        email: 'E-mail',
        organization_name: 'Organization name',
      },
    },
    billingInformation: {
      title: 'Payment Methods',
      form: {
        organization_number: 'Organization Number',
        company_name: 'Company Name',
        invoice_delivery: 'Invoice Delivery',
        email: 'E-mail',
        zip: 'Zip Code',
        city: 'City',
        message: 'Message to Charma(Optional)',
      },
    },
    confirmation: {
      title: 'Confirmation',
      selectedProducts: 'Selected products',
      shippingInformation: 'Shipping infromation',
      billingInformation: 'Billing information',
    },
    thankyou: {
      subtitle: 'Thank You!',
      order: 'Your order <span class="link">#{{order}}</span> has been placed!',
      desc: `We sent an email to <span class="link">{{email}}</span> with your order confirmation and receipt. If the email hasn't arrived within two minutes, please check your spam folder to see if the email was routed there.`,
    },
    errors: {
      selectProduct: 'Please select one or more product',
      formError: 'Something went wrong, please double check the form',
      submittingError: 'Something went wrong. please try again after 1 minute',
      forms: {
        required: 'This field cannot be empty',
        invalidEmail: 'Invalid email address.',
      },
    },
  },
};

const sv = {
  translation: {
    widget_button: 'Skicka en present',
    widget_button_disabled: 'Presentutskick inaktiverat',
    back: 'Tillbaka',
    next: 'Nästa',
    exit: 'Avsluta',
    loading_text: 'Förbereder beställning...',
    order: 'Placera beställning',
    sideBar: {
      title: 'Välkommen!',
      itemSelection: 'Val av objekt',
      itemSelectionSubtitle: 'Välj ett eller flera objekt',
      billingAddress: 'Faktureringsadress',
      billingAddressSubtitle: 'Lägg till faktureringsinformation',
      shippingAddress: 'Leveransadress',
      shippingAddressSubtitle: 'Lägg till leveransinformation',
      confirmation: 'Bekräftelse',
      confirmationSubtitle: 'Dubbelkolla allt',
      thankYou: 'Tack',
      thankYouSubtitle: 'Din beställning har lagts framgångsrikt',
    },
    productCard: {
      excludedVat: 'excl. moms',
    },
    step_product: {
      title: 'Välj produkt.',
    },
    shippingInfromation: {
      title: 'Leveransadress',
      form: {
        button: {
          personal: 'Personligt',
          company: 'Företag',
        },
        organizationName: 'Organisationsnamn',
        given_name: 'Förnamn',
        family_name: 'Efternamn',
        phone: 'Telefonnummer',
        care_of: 'Vård av',
        street_address: 'Gatuadress',
        street_address2: 'Gatuadress 2',
        postal_code: 'Postnummer',
        city: 'Stad',
        country: 'Land',
        comment: 'Kommentar',
        email: 'E-post',
        organization_name: 'Företagsnamn',
      },
    },
    billingInformation: {
      title: 'Betalningsmetoder',
      form: {
        organization_number: 'Organisationsnummer',
        company_name: 'Företagsnamn',
        invoice_delivery: 'Fakturaleverans',
        email: 'E-post',
        zip: 'Postnummer',
        city: 'Stad',
        message: 'Meddelande till Charma (valfritt)',
      },
    },
    confirmation: {
      title: 'Bekräftelse',
      selectedProducts: 'Valda produkter',
      shippingInformation: 'Leveransinformation',
      billingInformation: 'Faktureringsinformation',
    },
    thankyou: {
      subtitle: 'Tack!',
      order: 'Din beställning <span class="link">#{{order}}</span> har genomförts!',
      desc: `Vi har skickat ett mejl till <span class="link">{{email}}</span> med din beställningsbekräftelse och kvitto. Om mejlet inte har kommit fram inom två minuter, vänligen kontrollera din skräppostmapp.`,
    },
    errors: {
      selectProduct: 'Vänligen välj en eller flera produkter',
      formError: 'Något gick fel, var god kontrollera formuläret',
      submittingError: 'Något gick fel. Var god försök igen efter 1 minut',
      forms: {
        required: 'Detta fält får inte vara tomt',
        invalidEmail: 'Ogiltig e-postadress',
      },
    },
  },
};

const local = {
  en,
  sv,
};

function appGlobalScript () {
  instance
    .use(Browser)
    .init({
    lng: 'en',
    debug: true,
    detection: {
      order: ['navigator', 'htmlTag', 'localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: local,
  })
    .then(() => {
    // i18next.changeLanguage('en');
  });
  window.Charma = {
    widget,
    api: charmaAPI,
  };
}

const globalScripts = appGlobalScript;

export { globalScripts as g };

//# sourceMappingURL=app-globals-5cf9b84c.js.map