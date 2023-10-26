import { proxyCustomElement, HTMLElement, Build, Env, h, Host } from '@stencil/core/internal/client';
import { i as instance } from './i18next.js';
import { b as billingSchema, a as deliverySchema, c as charmaAPI, d as defineCustomElement$9 } from './charma-delivery2.js';
import { w as widgetState, b as billingState, d as deliveryState, r as resetAllStates } from './index2.js';
import { l as languagesSchema, d as defineCustomElement$4 } from './charma-payment2.js';
import { j as joinClass } from './joinClass.js';
import { d as defineCustomElement$b } from './charma-card2.js';
import { d as defineCustomElement$a } from './charma-confirmation2.js';
import { d as defineCustomElement$8 } from './charma-dropdown2.js';
import { d as defineCustomElement$7 } from './charma-gifting-button2.js';
import { d as defineCustomElement$6 } from './charma-input2.js';
import { d as defineCustomElement$5 } from './charma-order-placed2.js';
import { d as defineCustomElement$3 } from './charma-products2.js';
import { d as defineCustomElement$2 } from './charma-textarea2.js';

function promiseDelay(ms = 5000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

const charmaWidgetCss = "/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}:root{--main-bg-color:#b88d48}*{font-style:\"Nunito Sans', sans-serif\"}:host{all:initial}.visible{visibility:visible}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.left-0{left:0}.top-0{top:0}.z-\\[9998\\]{z-index:9998}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.h-3{height:.75rem}.h-9{height:2.25rem}.h-\\[0px\\]{height:0}.h-\\[20px\\]{height:20px}.h-\\[40px\\]{height:40px}.h-\\[50px\\]{height:50px}.h-\\[92\\%\\]{height:92%}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[800px\\]{max-height:800px}.w-3{width:.75rem}.w-\\[0px\\]{width:0}.w-\\[20px\\]{width:20px}.w-\\[40px\\]{width:40px}.w-full{width:100%}.w-screen{width:100vw}.max-w-\\[1200px\\]{max-width:1200px}.max-w-\\[300px\\]{max-width:300px}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.place-content-center{place-content:center}.place-items-start{place-items:start}.place-items-center{place-items:center}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-\\[30px\\]{gap:30px}.gap-\\[3px\\]{gap:3px}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-scroll{overflow-y:scroll}.overscroll-contain{overscroll-behavior:contain}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.border-\\[1px\\]{border-width:1px}.border-\\[\\#000\\],.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-\\[\\#00000080\\]{background-color:#00000080}.bg-\\[\\#F9F6F6\\]{--tw-bg-opacity:1;background-color:rgb(249 246 246/var(--tw-bg-opacity))}.bg-black{background-color:rgb(0 0 0/var(--tw-bg-opacity))}.bg-black,.bg-gray-500{--tw-bg-opacity:1}.bg-gray-500{background-color:rgb(107 114 128/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[20px\\]{padding-left:20px;padding-right:20px}.px-\\[25px\\]{padding-left:25px;padding-right:25px}.px-\\[8px\\]{padding-left:8px;padding-right:8px}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-\\[20px\\]{padding-bottom:20px;padding-top:20px}.py-\\[30px\\]{padding-bottom:30px;padding-top:30px}.py-\\[8px\\]{padding-bottom:8px;padding-top:8px}.pl-\\[16px\\]{padding-left:16px}.pt-\\[10px\\]{padding-top:10px}.pt-\\[300px\\]{padding-top:300px}.font-ns{font-family:sans-serif}.text-\\[10px\\]{font-size:10px}.text-\\[16px\\]{font-size:16px}.text-\\[18px\\]{font-size:18px}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.capitalize{text-transform:capitalize}.leading-6{line-height:1.5rem}.text-\\[\\#4F4F4F\\]{--tw-text-opacity:1;color:rgb(79 79 79/var(--tw-text-opacity))}.text-black{color:rgb(0 0 0/var(--tw-text-opacity))}.text-black,.text-red-500{--tw-text-opacity:1}.text-red-500{color:rgb(239 68 68/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\\:bg-black\\/90:hover{background-color:rgba(0,0,0,.9)}.hover\\:bg-white\\/90:hover{background-color:hsla(0,0%,100%,.9)}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}@media (min-width:640px){.sm\\:flex{display:flex}}.mb-\\[5px\\]{margin-bottom:5px}.block{display:block}.h-5{height:1.25rem}.h-\\[100px\\]{height:100px}.h-\\[180px\\]{height:180px}.h-\\[70px\\]{height:70px}.h-\\[90px\\]{height:90px}.min-h-\\[100px\\]{min-height:100px}.w-5{width:1.25rem}.w-\\[142px\\]{width:142px}.w-\\[160px\\]{width:160px}.w-\\[220px\\]{width:220px}.w-\\[240px\\]{width:240px}.gap-\\[\\.35rem\\]{gap:.35rem}.overflow-scroll{overflow:scroll}.border-\\[\\#000\\]{--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.px-\\[10px\\]{padding-left:10px;padding-right:10px}.py-\\[10px\\]{padding-bottom:10px;padding-top:10px}.pt-\\[5px\\]{padding-top:5px}.text-\\[12px\\]{font-size:12px}.text-\\[14px\\]{font-size:14px}.font-light{font-weight:300}.font-normal{font-weight:400}.text-\\[\\#5E5E5E\\]{--tw-text-opacity:1;color:rgb(94 94 94/var(--tw-text-opacity))}.text-\\[\\#727272\\]{color:rgb(114 114 114/var(--tw-text-opacity))}.text-\\[\\#727272\\],.text-black,.text-gray-300{--tw-text-opacity:1}.text-gray-300{color:rgb(209 213 219/var(--tw-text-opacity))}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-100{transition-duration:.1s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.hover\\:border-\\[\\#a7a7a7\\]:hover{--tw-border-opacity:1;border-color:rgb(167 167 167/var(--tw-border-opacity))}.hover\\:ease-in:hover{transition-timing-function:cubic-bezier(.4,0,1,1)}.relative{position:relative}.top-\\[3\\.6rem\\]{top:3.6rem}.z-50{z-index:50}.grid{display:grid}.h-4{height:1rem}.max-h-\\[150px\\]{max-height:150px}.w-4{width:1rem}.rounded-sm{border-radius:.125rem}.border{border-width:1px}.bg-transparent{background-color:transparent}.px-1{padding-left:.25rem;padding-right:.25rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-\\[15px\\]{padding-left:15px;padding-right:15px}.py-1{padding-bottom:.25rem;padding-top:.25rem}.leading-none{line-height:1}.opacity-50{opacity:.5}.shadow,.shadow-sm{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.drop-shadow-sm{--tw-drop-shadow:drop-shadow(0 1px 1px rgba(0,0,0,.05));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover\\:bg-\\[\\#e2e2e2\\]:hover{--tw-bg-opacity:1;background-color:rgb(226 226 226/var(--tw-bg-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-1:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.disabled\\:cursor-not-allowed:disabled,.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.border-red-500{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity))}.file\\:border-0::file-selector-button{border-width:0}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@300;400;600&family=Raleway:wght@300;400;500&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700&display=swap\");.min-h-\\[60px\\]{min-height:60px}";

const CharmaWidget$1 = /*@__PURE__*/ proxyCustomElement(class CharmaWidget extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.animationLoaded = false;
    this.toggleForm = () => {
      if (this.disabled)
        return;
      document.body.style.position = 'fixed';
      document.body.style.top = `-$${window.scrollY}px`;
      this.showWidget = true;
      this.step = 1;
    };
    this.navigateTab = (index) => {
      this.step = index;
    };
    this.nextStep = async () => {
      switch (this.step) {
        case 1:
          if (!widgetState.preselectedProduct && widgetState.selectedProducts.length === 0) {
            widgetState.error = 'product error';
            break;
          }
          else {
            widgetState.error = undefined;
          }
          if (widgetState.isDeliveryValid && widgetState.isBillingValid) {
            this.step = 4;
          }
          else if (widgetState.isDeliveryValid) {
            this.step = 3;
          }
          else if (widgetState.isBillingValid) {
            this.step = 2;
          }
          else {
            this.step += 1;
          }
          break;
        case 2:
          const validateShippingForm = deliverySchema.safeParse(deliveryState);
          if (validateShippingForm.success === false) {
            widgetState.deliveryFormErrors = validateShippingForm.error.formErrors.fieldErrors;
            widgetState.error = 'form error';
            break;
          }
          else {
            widgetState.error = undefined;
          }
          if (widgetState.isBillingValid) {
            this.step = 4;
          }
          else {
            this.step += 1;
          }
          break;
        case 3:
          const validateBillingForm = billingSchema.safeParse(billingState);
          if (validateBillingForm.success === false) {
            widgetState.billingFormErrors = validateBillingForm.error.formErrors.fieldErrors;
            widgetState.error = 'form error';
            break;
          }
          else {
            widgetState.error = undefined;
            this.step += 1;
          }
          break;
        case 4:
          return await this.onGiftSubmit()
            .then(() => {
            widgetState.error = undefined;
            this.step = 5;
          })
            .catch(err => {
            console.error(err);
            widgetState.error = 'submitting error';
          });
        case 5:
          this.handleCloseWidget();
        default:
          this.step += 1;
          break;
      }
    };
    this.goBack = () => {
      switch (this.step) {
        case 3:
          if (widgetState.isDeliveryValid) {
            this.step = 1;
            break;
          }
          else {
            this.step -= 1;
            break;
          }
        case 4:
          if (widgetState.isDeliveryValid && widgetState.isBillingValid) {
            this.step = 1;
          }
          else if (widgetState.isBillingValid) {
            this.step = 2;
          }
          else if (widgetState.isDeliveryValid) {
            this.step = 3;
          }
          else {
            this.step -= 1;
          }
          break;
        default:
          this.step -= 1;
          break;
      }
    };
    this.onProductSelect = (id) => {
      if (widgetState.selectedProducts.includes(id)) {
        widgetState.selectedProducts = widgetState.selectedProducts.filter(p => p !== id);
      }
      else {
        widgetState.selectedProducts = [...widgetState.selectedProducts, id];
      }
    };
    this.showWidget = false;
    this.disabled = false;
    this.isSubmitting = false;
    this.isProductLoading = true;
    this.step = 1;
    this.hasPreselectedProduct = false;
    this.buttonSize = 'default';
    this.language = 'en';
    this.productId = undefined;
  }
  componentWillLoad() {
    const currentLanguage = instance.language;
    if (currentLanguage !== this.language && languagesSchema.safeParse(this.language).success) {
      widgetState.language = this.language;
      instance.changeLanguage(this.language);
    }
  }
  componentDidLoad() {
    if (Build.isDev) {
      // No shipping
      // const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjI0ZDdkYTgyLWNjOWItNGJlZi04MTdjLTI2N2FjZGU3MjJlOSIsImlhdCI6MTY4MTA3ODI4NCwiZXhwIjoxNjgxMDc4MzQ0fQ.6l8S31q_2gX-1HOMUiG4OloX4lYcmZfCTN2JYDT9FqY`;
      // No billing
      const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjI0ZDdkYTgyLWNjOWItNGJlZi04MTdjLTI2N2FjZGU3MjJlOSIsImlhdCI6MTY4MDAwNDU1NywiZXhwIjoxNjgwMDA0NjE3fQ.f-BBpE2l5IVwsOxnN9Xn7ot_xiYfCT4uvEjOqNLimq8`;
      charmaAPI.init(key);
    }
  }
  openWidget(e) {
    const data = e.detail;
    if (data && Object.keys(data).length) {
      if (data.delivery) {
        Object.assign(deliveryState, data.delivery);
        widgetState.isDeliveryValid = true;
      }
      if (data.billing) {
        Object.assign(billingState, data.billing);
        widgetState.isBillingValid = true;
      }
    }
    this.showWidget = true;
  }
  handleCloseWidget() {
    this.showWidget = false;
    this.step = 1;
    this.hasPreselectedProduct = false;
    this.isProductLoading = false;
    document.body.style.position = '';
    document.body.style.top = '';
    resetAllStates();
  }
  closeWidget() {
    this.handleCloseWidget();
  }
  invalidKey() {
    this.disabled = true;
  }
  async onModalOpen(newState, prevState) {
    if (this.showWidget === false) {
      return;
    }
    if (newState !== prevState && newState === true && charmaAPI.keyMetadata) {
      this.validateAndSetInitialData();
    }
    this.isProductLoading = true;
    const productsRes = await charmaAPI.getProducts();
    if (productsRes === null || productsRes === void 0 ? void 0 : productsRes.products) {
      this.isProductLoading = false;
      widgetState.products = productsRes.products;
      const preselectedProduct = widgetState.products.find(product => product.productIdentifier === this.productId || product.productIdentifier === widgetState.preselectedProduct);
      if (preselectedProduct) {
        widgetState.preselectedProduct = preselectedProduct;
        this.onProductSelect(preselectedProduct.id);
        this.hasPreselectedProduct = true;
        if (!widgetState.isDeliveryValid) {
          this.step = 2;
          return;
        }
        if (!widgetState.isBillingValid) {
          this.step = 3;
          return;
        }
        this.step = 4;
        return;
      }
      this.step = 1;
    }
  }
  validateAndSetInitialData() {
    const delivery = deliverySchema.safeParse(charmaAPI.keyMetadata.shippingAddress);
    if (delivery.success) {
      Object.assign(deliveryState, delivery.data);
      widgetState.isDeliveryValid = true;
    }
    const billing = billingSchema.safeParse(charmaAPI.keyMetadata.billingAddress);
    if (billing.success) {
      Object.assign(billingState, billing.data);
      widgetState.isBillingValid = true;
    }
  }
  async onGiftSubmit() {
    this.isSubmitting = true;
    await promiseDelay(500);
    return await charmaAPI
      .createOrder({
      lines: widgetState.selectedProducts.map(productId => ({
        count: 1,
        productGroupId: Env.DEFAULT_PRODUCT_GROUP_ID,
        productId,
      })),
      customerInfo: {
        givenName: deliveryState.givenName,
        familyName: deliveryState.familyName,
        phone: deliveryState.phone,
        email: billingState.email,
      },
      billing: billingState,
      delivery: Object.assign(Object.assign({}, deliveryState), { familyName: deliveryState.type === 'personal' ? deliveryState.familyName : '', givenName: deliveryState.type === 'personal' ? deliveryState.givenName : '', organizationName: deliveryState.type === 'company' ? deliveryState.organizationName : '' }),
      siteId: Env.SITE_ID,
    })
      .then(order => {
      if ('statusCode' in order && order['statusCode'] !== 200) {
        throw new Error('Something went wrong');
      }
      else {
        return (widgetState.order = order);
      }
    })
      .finally(() => {
      this.isSubmitting = false;
    });
  }
  renderSteps() {
    switch (this.step) {
      case 1:
        return h("charma-products", { onProductSelect: (e) => this.onProductSelect(e.detail) });
      case 2:
        return h("charma-delivery", { language: widgetState.language });
      case 3:
        return h("charma-payment", { language: widgetState.language });
      case 4:
        return h("charma-confirmation", { navigateTab: this.navigateTab, language: widgetState.language });
      case 5:
        return h("charma-order-placed", { language: widgetState.language });
      default:
        return null;
    }
  }
  getButtonLabel() {
    if (this.isSubmitting)
      return instance.t('loading_text');
    if (this.step === 4) {
      return instance.t('order');
    }
    else if (this.step === 5) {
      return instance.t('exit');
    }
    return instance.t('next');
  }
  switchlanguage(language) {
    widgetState.language = language;
    instance.changeLanguage(language);
  }
  getError() {
    if (widgetState.error === 'form error') {
      return instance.t('errors.formError');
    }
    else if (widgetState.error === 'product error') {
      return instance.t('errors.selectProduct');
    }
    else if (widgetState.error === 'submitting error') {
      return instance.t('errors.submittingError');
    }
    else {
      return '';
    }
  }
  render() {
    const sideBarMenu = [
      {
        id: 1,
        title: instance.t('sideBar.itemSelection'),
        subtitle: instance.t('sideBar.itemSelectionSubtitle'),
        svg: (h("svg", { width: "11", height: "12", viewBox: "0 0 11 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: "w-[20px] h-[20px]  " }, h("path", { d: "M10.2593 5.8V10.2C10.2593 10.4122 10.1812 10.6157 10.0423 10.7657C9.90339 10.9157 9.71498 11 9.51852 11H2.48148C2.28502 11 2.09661 10.9157 1.9577 10.7657C1.81878 10.6157 1.74074 10.4122 1.74074 10.2V5.8M5.81481 2.4C5.81481 2.12311 5.73879 1.85243 5.59635 1.6222C5.45391 1.39197 5.25146 1.21253 5.01459 1.10657C4.77772 1.00061 4.51708 0.972882 4.26562 1.0269C4.01417 1.08092 3.78319 1.21426 3.6019 1.41005C3.42061 1.60584 3.29715 1.8553 3.24713 2.12687C3.19711 2.39845 3.22278 2.67994 3.3209 2.93576C3.41901 3.19157 3.58516 3.41022 3.79834 3.56406C4.01151 3.71789 4.26214 3.8 4.51852 3.8H5.81481M5.81481 2.4V3.8M5.81481 2.4C5.81481 2.12311 5.89084 1.85243 6.03328 1.6222C6.17572 1.39197 6.37817 1.21253 6.61504 1.10657C6.85191 1.00061 7.11255 0.972882 7.36401 1.0269C7.61546 1.08092 7.84644 1.21426 8.02773 1.41005C8.20902 1.60584 8.33248 1.8553 8.3825 2.12687C8.43252 2.39845 8.40685 2.67994 8.30873 2.93576C8.21062 3.19157 8.04447 3.41022 7.8313 3.56406C7.61812 3.71789 7.36749 3.8 7.11111 3.8H5.81481M5.81481 3.8V11M1.55556 5.8H10.4444C10.7511 5.8 11 5.5312 11 5.2V4.4C11 4.0688 10.7511 3.8 10.4444 3.8H1.55556C1.24889 3.8 1 4.0688 1 4.4V5.2C1 5.5312 1.24889 5.8 1.55556 5.8Z", stroke: "black", "stroke-width": "0.75", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
      },
      {
        id: 2,
        title: instance.t('sideBar.shippingAddress'),
        subtitle: instance.t('sideBar.shippingAddressSubtitle'),
        svg: (h("svg", { width: "13", height: "11", viewBox: "0 0 13 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: "w-[20px] h-[20px]" }, h("path", { d: "M4.19855 9.10003C4.19855 9.33872 4.10114 9.56763 3.92774 9.7364C3.75433 9.90518 3.51915 10 3.27392 10C3.02869 10 2.79351 9.90518 2.6201 9.7364C2.4467 9.56763 2.34928 9.33872 2.34928 9.10003M4.19855 9.10003C4.19855 8.86134 4.10114 8.63243 3.92774 8.46365C3.75433 8.29488 3.51915 8.20006 3.27392 8.20006C3.02869 8.20006 2.79351 8.29488 2.6201 8.46365C2.4467 8.63243 2.34928 8.86134 2.34928 9.10003M4.19855 9.10003H7.8971M2.34928 9.10003H1.19349C1.00957 9.10003 0.833178 9.02892 0.703126 8.90233C0.573074 8.77575 0.500011 8.60407 0.500011 8.42505V6.40012M7.8971 9.10003H9.28405M7.8971 9.10003V6.40012M0.500011 6.40012V1.81926C0.499032 1.65497 0.560706 1.49616 0.673096 1.37358C0.785487 1.251 0.940603 1.17336 1.10842 1.15568C3.16299 0.948106 5.23412 0.948106 7.28869 1.15568C7.63697 1.19048 7.8971 1.47847 7.8971 1.81926V2.39404M0.500011 6.40012H7.8971M11.1333 9.10003C11.1333 9.33872 11.0359 9.56763 10.8625 9.7364C10.6891 9.90518 10.4539 10 10.2087 10C9.96346 10 9.72827 9.90518 9.55487 9.7364C9.38147 9.56763 9.28405 9.33872 9.28405 9.10003M11.1333 9.10003C11.1333 8.86134 11.0359 8.63243 10.8625 8.46365C10.6891 8.29488 10.4539 8.20006 10.2087 8.20006C9.96346 8.20006 9.72827 8.29488 9.55487 8.46365C9.38147 8.63243 9.28405 8.86134 9.28405 9.10003M11.1333 9.10003H11.8268C12.2096 9.10003 12.5227 8.79764 12.4987 8.42565C12.3748 6.4443 11.6893 4.53511 10.5181 2.91003C10.4066 2.7578 10.2609 2.63225 10.0922 2.54286C9.92348 2.45347 9.73609 2.40258 9.54418 2.39404H7.8971M7.8971 2.39404V6.40012", stroke: "black", "stroke-width": "0.75", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
      },
      {
        id: 3,
        title: instance.t('sideBar.billingAddress'),
        subtitle: instance.t('sideBar.billingAddressSubtitle'),
        svg: (h("svg", { width: "11", height: "10", viewBox: "0 0 11 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: "w-[20px] h-[20px]" }, h("path", { d: "M0.5 3H10.5M0.5 3.4H10.5M2.03846 6.2H5.11538M2.03846 7.4H3.57692M1.65385 9H9.34615C9.65217 9 9.94566 8.87357 10.162 8.64853C10.3784 8.42348 10.5 8.11826 10.5 7.8V2.2C10.5 1.88174 10.3784 1.57652 10.162 1.35147C9.94566 1.12643 9.65217 1 9.34615 1H1.65385C1.34783 1 1.05434 1.12643 0.837954 1.35147C0.621566 1.57652 0.5 1.88174 0.5 2.2V7.8C0.5 8.11826 0.621566 8.42348 0.837954 8.64853C1.05434 8.87357 1.34783 9 1.65385 9Z", stroke: "black", "stroke-width": "0.75", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
      },
      {
        id: 4,
        title: instance.t('sideBar.confirmation'),
        subtitle: instance.t('sideBar.confirmationSubtitle'),
        svg: (h("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: "w-[20px] h-[20px]" }, h("path", { d: "M6 3.27273H6.91667M6 5.09091H6.91667M2.33333 6.90909H6.91667M2.33333 8.72727H6.91667M8.75 3.27273H10.8125C11.192 3.27273 11.5 3.57818 11.5 3.95455V9.63636C11.5 9.99802 11.3551 10.3449 11.0973 10.6006C10.8394 10.8563 10.4897 11 10.125 11M8.75 3.27273V9.63636C8.75 9.99802 8.89487 10.3449 9.15273 10.6006C9.41059 10.8563 9.76033 11 10.125 11M8.75 3.27273V1.68182C8.75 1.30545 8.442 1 8.0625 1H1.1875C0.808 1 0.5 1.30545 0.5 1.68182V9.63636C0.5 9.99802 0.644866 10.3449 0.902728 10.6006C1.16059 10.8563 1.51033 11 1.875 11H10.125M2.33333 3.27273H4.16667V5.09091H2.33333V3.27273Z", stroke: "black", "stroke-width": "0.75", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
      },
      {
        id: 5,
        title: instance.t('sideBar.thankYou'),
        subtitle: instance.t('sideBar.thankYouSubtitle'),
        svg: (h("svg", { width: "13", height: "14", viewBox: "0 0 13 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: "w-[20px] h-[20px]" }, h("path", { d: "M5.15415 9.40246L4.65385 11.1538L4.15354 9.40246C4.02423 8.95007 3.78178 8.53808 3.44908 8.20538C3.11638 7.87268 2.70439 7.63023 2.252 7.50092L0.5 7L2.25138 6.49969C2.70378 6.37038 3.11577 6.12794 3.44847 5.79524C3.78117 5.46253 4.02361 5.05055 4.15292 4.59815L4.65385 2.84615L5.15415 4.59754C5.28346 5.04993 5.52591 5.46192 5.85861 5.79462C6.19131 6.12732 6.6033 6.36977 7.05569 6.49908L8.80769 7L7.05631 7.50031C6.60391 7.62962 6.19193 7.87206 5.85923 8.20476C5.52652 8.53747 5.28408 8.94945 5.15477 9.40185L5.15415 9.40246ZM10.3517 4.97846L10.1923 5.61538L10.0329 4.97846C9.94169 4.61329 9.75294 4.27977 9.48684 4.01356C9.22074 3.74735 8.88729 3.55846 8.52215 3.46708L7.88462 3.30769L8.52215 3.14831C8.88729 3.05693 9.22074 2.86804 9.48684 2.60183C9.75294 2.33562 9.94169 2.0021 10.0329 1.63692L10.1923 1L10.3517 1.63692C10.443 2.00218 10.6318 2.33575 10.898 2.60196C11.1643 2.86818 11.4978 3.05703 11.8631 3.14831L12.5 3.30769L11.8631 3.46708C11.4978 3.55836 11.1643 3.74721 10.898 4.01342C10.6318 4.27964 10.443 4.61321 10.3517 4.97846ZM9.51169 12.272L9.26923 13L9.02677 12.272C8.95879 12.0681 8.84428 11.8828 8.69228 11.7308C8.54029 11.5788 8.355 11.4643 8.15108 11.3963L7.42308 11.1538L8.15108 10.9114C8.355 10.8434 8.54029 10.7289 8.69228 10.5769C8.84428 10.4249 8.95879 10.2396 9.02677 10.0357L9.26923 9.30769L9.51169 10.0357C9.57967 10.2396 9.69419 10.4249 9.84618 10.5769C9.99817 10.7289 10.1835 10.8434 10.3874 10.9114L11.1154 11.1538L10.3874 11.3963C10.1835 11.4643 9.99817 11.5788 9.84618 11.7308C9.69419 11.8828 9.57967 12.0681 9.51169 12.272Z", stroke: "black", "stroke-width": "0.75", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
      },
    ];
    const closeButton = (h("button", { onClick: () => this.handleCloseWidget(), class: " flex place-items-start" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-label": "circle xmark", viewBox: "0 0 512 512" }, h("path", { d: "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" }))));
    const loader = (h("div", { class: "flex place-content-center place-items-center h-full w-full pt-[300px]" }, h("div", { class: "flex space-x-2 animate-pulse" }, h("div", { class: "w-3 h-3 bg-gray-500 rounded-full" }), h("div", { class: "w-3 h-3 bg-gray-500 rounded-full" }), h("div", { class: "w-3 h-3 bg-gray-500 rounded-full" }))));
    const renderHeader = () => {
      switch (this.step) {
        case 1:
          return instance.t('step_product.title');
        case 2:
          return instance.t('shippingInfromation.title');
        case 3:
          return instance.t('billingInformation.title');
        case 4:
          return instance.t('confirmation.title');
        default:
          return '';
      }
    };
    const logo = (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "130", height: "26", viewBox: "0 0 170 26", fill: "none" }, h("path", { d: "M18.5 1.70001C20.2 0.200012 22.7 -0.299988 24.8 0.200012C27.4 0.800012 29.6 3.00001 30.1 5.60001C30.8 8.60001 29.4 12 26.7 13.5C24.2 14.6 21.4 15 18.8 15.7C22.1 17.8 25.3 20.1 28.7 22.3C29.1 22.6 29.5 22.8 29.7 23.2C29.3 24 28.8 24.9 28.1 25.5C27.6 25.3 27.2 25 26.8 24.8C23 22.2 19.1 19.6 15.3 17.1C11 20 6.69998 22.8 2.39998 25.6C1.59998 24.9 1.09998 23.9 0.599979 23C4.29998 20.6 7.89998 18.2 11.7 15.9C9.89998 15.5 8.09998 15.1 6.39998 14.4C4.49998 13.8 2.39998 12.9 1.29998 11.2C-0.400022 8.70001 -0.300022 5.10001 1.69998 2.80001C3.89998 -0.499988 9.19998 -0.899988 12 1.90001C13.9 3.50001 14.5 6.00001 15.1 8.20001C15.7 5.90001 16.6 3.40001 18.5 1.70001ZM5.39998 3.60001C3.49998 4.50001 2.59998 6.80001 3.39998 8.80001C3.89998 10 4.99998 10.8 6.29998 11.2C8.49998 12 10.8 12.8 13.2 13C12.5 10.4 12 7.70001 10.7 5.30001C9.79998 3.40001 7.19998 2.50001 5.39998 3.60001ZM21.5 3.50001C19.7 4.20001 19.2 6.10001 18.6 7.60001C18 9.40001 17.5 11.2 17.1 13.1C19.6 12.5 22.2 11.9 24.6 10.9C26.2 10.2 27.3 8.50001 27.1 6.80001C26.9 4.20001 23.9 2.30001 21.5 3.50001ZM40.1 11.4C40.8 6.90001 44.7 3.20001 49.3 2.70001C52 2.40001 54.9 3.00001 56.9 4.80001C56.9 4.90001 56.9 5.10001 56.9 5.20001C56.2 6.30001 55.4 7.30001 54.7 8.40001C54.5 8.70001 54.1 9.30001 53.7 8.90001C52.9 8.40001 52 7.80001 50.9 7.80001C48.7 7.60001 46.4 8.90001 45.6 11C44.6 13.2 45.2 15.9 47.1 17.4C48.4 18.5 50.2 18.9 51.8 18.4C52.7 18.2 53.4 17.5 54.2 17.3C55.3 18.6 56.1 20 57.1 21.4C53.5 24.6 47.6 24.4 43.9 21.5C41.8 19.9 40.4 17.5 40 14.9C39.9 14.9 39.8 14.9 39.8 15C39.7 13.8 39.7 12.6 39.8 11.4C39.9 11.4 40.1 11.4 40.1 11.4ZM60.8 3.10001C62.5 2.90001 64.4 2.90001 66.1 3.10001C66.3 5.40001 66.1 7.70001 66.2 10C68.5 10 70.9 10 73.2 10C73.2 7.60001 73 5.30001 73.3 3.00001C75 2.80001 76.7 2.90001 78.4 3.00001C78.5 3.40001 78.5 3.90001 78.5 4.40001C78.5 10.4 78.5 16.3 78.5 22.3C78.5 22.7 78.4 23.2 78.3 23.6C76.6 23.6 74.9 23.6 73.2 23.6C72.9 20.8 73.1 17.9 73.1 15C70.8 15 68.4 15 66.1 15C66 17.9 66.2 20.7 66 23.5C64.5 23.5 62.9 23.5 61.4 23.5C60.9 23.6 60.7 23 60.7 22.5C60.8 16.1 60.8 9.60001 60.8 3.10001ZM88.8 3.80001C89 3.50001 89.1 2.90001 89.6 3.00001C90.8 2.90001 92.1 3.00001 93.3 3.00001C93.9 2.90001 94.1 3.70001 94.3 4.10001C96.6 10 98.9 15.9 101.3 21.8C101.5 22.4 101.7 23 101.9 23.6C100.2 23.6 98.6 23.7 96.9 23.6C96 22.9 95.9 21.4 95.4 20.4C92.9 20.4 90.3 20.4 87.7 20.4C87.2 21.5 87.1 22.7 86.4 23.6C84.7 23.7 83 23.6 81.3 23.6C81.5 22.7 81.8 21.9 82.2 21.1C84.3 15.3 86.6 9.50001 88.8 3.80001ZM91.4 9.50001C90.7 11.6 90 13.7 89.2 15.8C90.7 15.8 92.2 15.8 93.7 15.8C92.9 13.7 92.2 11.6 91.4 9.50001ZM104.7 3.00001C108 2.90001 111.4 2.90001 114.8 2.90001C118.9 3.00001 121.9 7.40001 120.8 11.3C120.3 13 119.1 14.4 117.7 15.4C119.1 18 120.5 20.6 121.8 23.2C121.7 23.3 121.6 23.4 121.5 23.5C119.6 23.6 117.8 23.5 115.9 23.5C114.6 21.2 113.5 18.8 112.2 16.5C111.5 16.5 110.7 16.5 110 16.5C109.9 18.8 110.2 21.2 109.8 23.5C108.1 23.5 106.4 23.5 104.7 23.5C104.5 21.8 104.6 20.1 104.6 18.4C104.7 13.3 104.5 8.10001 104.7 3.00001ZM110 7.20001C110 8.80001 110 10.4 110 12C111.3 12 112.5 12.1 113.8 11.9C115.4 11.4 116.1 9.20001 114.9 8.00001C113.7 6.70001 111.6 7.40001 110 7.20001ZM125.5 3.10001C125.6 3.10001 125.7 3.00001 125.8 2.90001C127.5 2.80001 129.2 2.90001 130.9 2.90001C131.3 2.80001 131.3 3.40001 131.5 3.60001C132.8 7.70001 134 11.8 135.3 15.9C136.2 12.6 137.3 9.40001 138.3 6.10001C138.7 5.10001 138.9 4.00001 139.3 2.90001C141 2.80001 142.8 2.80001 144.6 2.80001C145.1 2.70001 145.1 3.40001 145.2 3.70001C145.8 9.80001 146.5 15.9 147.1 22C147.1 22.4 147.3 23 146.9 23.3C145.3 23.4 143.7 23.3 142.1 23.3C141.7 22.3 141.7 21.2 141.6 20.2C141.4 17.4 140.9 14.6 140.9 11.8C139.5 15.6 138.6 19.5 137.3 23.2C135.9 23.2 134.4 23.2 133 23.2C131.7 19.4 130.7 15.4 129.5 11.5C129 15.4 128.8 19.4 128.2 23.2C126.5 23.1 124.8 23.4 123.1 23C124 16.6 124.6 9.80001 125.5 3.10001ZM156.8 3.80001C157 3.40001 157.1 2.90001 157.6 2.90001C158.9 2.80001 160.2 2.80001 161.5 2.90001C162 3.00001 162.1 3.50001 162.3 3.90001C164.6 9.60001 166.8 15.4 169.1 21.1C169.4 21.8 169.6 22.6 170.1 23.2C168.4 23.7 166.6 23.4 164.8 23.4C163.9 22.6 163.8 21.2 163.4 20.2C160.9 20.2 158.3 20.2 155.7 20.2C155.2 21.2 155.2 22.6 154.3 23.4C152.6 23.5 151 23.4 149.3 23.4C149.5 22.3 150 21.3 150.4 20.3C152.4 14.8 154.6 9.30001 156.8 3.80001ZM159.4 9.60001C158.7 11.7 158 13.7 157.3 15.7C158.8 15.7 160.3 15.7 161.8 15.7C160.8 13.7 160.3 11.6 159.4 9.60001Z", fill: "#DEB064" })));
    const sidebar = (h("div", { class: "max-w-[300px] w-full h-full bg-[#F9F6F6] rounded-2xl px-[25px] py-[20px] hidden sm:flex flex-col justify-between " }, h("div", { class: "" }, h("span", { class: "w-full" }, logo), h("div", { class: "flex gap-[3px] flex-col py-[30px] font-ns" }, sideBarMenu
      .filter(({ id }) => {
      // Remove prodcut page if there is a selected one
      if (id === 1 && (this.hasPreselectedProduct || widgetState.preselectedProduct)) {
        return false;
      }
      // Remove Shipping if it is already valid
      if (id === 2 && widgetState.isDeliveryValid) {
        return false;
      }
      // Remove billing if it is already valid
      if (id === 3 && widgetState.isBillingValid) {
        return false;
      }
      return true;
    })
      .map(({ subtitle, title, svg, id }) => {
      return (h("div", { class: joinClass('w-full py-[8px] px-[8px] flex gap-3 rounded-xl cursor-default ', id === this.step ? ' border-[1px] border-[#000]  pl-[16px]' : '') }, h("div", { class: "h-[40px] w-[40px] border-[1px] border-black rounded-3xl flex place-content-center place-items-center overflow-hidden" }, svg), h("div", { class: "flex flex-col place-content-center" }, h("span", { class: "text-[16px] leading-6 " }, title), h("span", { class: "text-[10px] text-[#4F4F4F]" }, subtitle))));
    }))), h("div", { class: "flex flex-col gap-1 font-ns" }, h("span", { class: "text-[16px]" }, h("span", { class: joinClass('cursor-pointer', widgetState.language === 'en' ? 'font-semibold' : ''), onClick: () => {
        if (instance.language !== 'en')
          this.switchlanguage('en');
      } }, "English"), ' ', "/", ' ', h("span", { class: joinClass('cursor-pointer', widgetState.language === 'sv' ? 'font-semibold' : ''), onClick: () => {
        if (instance.language !== 'sv')
          this.switchlanguage('sv');
      } }, "Swedish")), h("span", { class: "text-[#4F4F4F] text-xs cursor-pointer" }, "Powered by charma.io"))));
    const errorBlock = widgetState.error && h("p", { class: "text-red-500 font-ns text-xs pt-[10px]" }, this.getError());
    const isInitialLoading = this.isProductLoading;
    return (h(Host, null, h("charma-gifting-button", { size: this.buttonSize, onClick: this.toggleForm, disabled: this.disabled }), h("div", { class: joinClass('w-screen h-screen bg-[#00000080] absolute flex z-[9998] place-content-center place-items-center top-0 left-0  overscroll-contain', this.showWidget ? 'visible' : 'invisible') }, "(", h("div", { class: joinClass('max-w-[1200px] max-h-[800px] bg-white flex py-[20px] px-[20px] rounded-2xl gap-[30px] overflow-hidden', this.showWidget ? ' w-full h-full' : 'w-[0px] h-[0px]') }, sidebar, h("div", { class: "w-full flex justify-between flex-col " }, h("div", { class: "flex flex-col h-[92%] " }, h("div", { class: "flex justify-between" }, h("span", { class: " font-ns py-4 text-[18px] capitalize" }, renderHeader()), closeButton), h("div", { class: "overflow-y-scroll" }, isInitialLoading ? loader : this.renderSteps())), h("div", { class: "h-[50px] w-full flex justify-between py-4" }, h("div", { class: " flex gap-4" }, this.step !== 1 && this.step !== 5 && (h("div", null, h("button", { onClick: this.goBack, disabled: isInitialLoading, class: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-black shadow hover:bg-white/90 h-9 px-4 py-2 font-ns gap-2 border-gray-300 border-[1px]" }, h("svg", { width: "11", height: "9", viewBox: "0 0 11 9", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M5.42505 0.44482L5.425 0.444776C5.34532 0.365188 5.2373 0.320483 5.12467 0.320483C5.01204 0.320483 4.90402 0.365188 4.82434 0.444776L4.82431 0.444798L1.07431 4.1948L1.07429 4.19482C0.994704 4.27451 0.95 4.38253 0.95 4.49515C0.95 4.60778 0.994704 4.7158 1.07429 4.79549L1.07431 4.79551L4.82371 8.54491C4.8625 8.58635 4.9092 8.61961 4.96105 8.64272C5.01318 8.66595 5.06946 8.67843 5.12653 8.67944C5.18359 8.68045 5.24027 8.66995 5.2932 8.64858C5.34612 8.6272 5.39419 8.59538 5.43454 8.55503C5.4749 8.51467 5.50672 8.4666 5.52809 8.41368C5.54947 8.36076 5.55997 8.30408 5.55896 8.24701C5.55795 8.18995 5.54546 8.13367 5.52223 8.08153C5.49913 8.02968 5.46587 7.98298 5.42443 7.9442L2.40038 4.92015H10.3747C10.4874 4.92015 10.5955 4.87538 10.6752 4.79567C10.7549 4.71597 10.7997 4.60787 10.7997 4.49515C10.7997 4.38244 10.7549 4.27434 10.6752 4.19463C10.5955 4.11493 10.4874 4.07015 10.3747 4.07015H2.40038L5.42503 1.04551L5.42505 1.04549C5.50464 0.965799 5.54934 0.857779 5.54934 0.745153C5.54934 0.632528 5.50464 0.524508 5.42505 0.44482Z", fill: "black", stroke: "black", "stroke-width": "0.1" })), h("span", null, instance.t('back'))))), errorBlock), h("button", { onClick: this.nextStep, disabled: isInitialLoading, class: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 font-ns gap-2 border-black border-[1px]" }, this.getButtonLabel())))), ")")));
  }
  static get watchers() { return {
    "showWidget": ["onModalOpen"]
  }; }
  static get style() { return charmaWidgetCss; }
}, [1, "charma-widget", {
    "buttonSize": [1, "button-size"],
    "language": [1],
    "productId": [1, "product-id"],
    "showWidget": [32],
    "disabled": [32],
    "isSubmitting": [32],
    "isProductLoading": [32],
    "step": [32],
    "hasPreselectedProduct": [32]
  }, [[8, "charma-widget-open", "openWidget"], [8, "charma-widget-close", "closeWidget"], [8, "invalid-charma-key", "invalidKey"]], {
    "showWidget": ["onModalOpen"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["charma-widget", "charma-card", "charma-confirmation", "charma-delivery", "charma-dropdown", "charma-gifting-button", "charma-input", "charma-order-placed", "charma-payment", "charma-products", "charma-textarea"];
  components.forEach(tagName => { switch (tagName) {
    case "charma-widget":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CharmaWidget$1);
      }
      break;
    case "charma-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "charma-confirmation":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "charma-delivery":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "charma-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "charma-gifting-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "charma-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "charma-order-placed":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "charma-payment":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "charma-products":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "charma-textarea":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CharmaWidget = CharmaWidget$1;
const defineCustomElement = defineCustomElement$1;

export { CharmaWidget, defineCustomElement };

//# sourceMappingURL=charma-widget.js.map