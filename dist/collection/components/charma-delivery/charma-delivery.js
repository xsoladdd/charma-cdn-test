import { Host, h } from "@stencil/core";
import { deliveryState, widgetState } from "../../store";
import i18next from "i18next";
import { charmaAPI } from "../../api";
import { joinClass } from "../../utils/joinClass";
export class CharmaDelivery {
  constructor() {
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
      } }), h("label", { class: joinClass('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary font-ns cursor-pointer transition delay-0 duration-300 ease-in-out', deliveryState.type === 'personal' ? 'border-black/50' : ' '), htmlFor: "personal" }, h("div", { class: "py-2" }, h("svg", { width: "22", height: "22", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M0.5 8.10882L7.38769 1.2521C7.72615 0.915966 8.27385 0.915966 8.61154 1.2521L15.5 8.10882M2.23077 6.38603V14.1386C2.23077 14.6141 2.61846 15 3.09615 15H6.26923V11.2673C6.26923 10.7918 6.65692 10.4059 7.13462 10.4059H8.86538C9.34308 10.4059 9.73077 10.7918 9.73077 11.2673V15H12.9038C13.3815 15 13.7692 14.6141 13.7692 14.1386V6.38603M5.11538 15H11.4615", stroke: "black", "stroke-linecap": "round", "stroke-linejoin": "round" }))), i18next.t('shippingInfromation.form.button.personal'))), h("div", null, h("button", { type: "button", role: "radio", "aria-checked": "false", "data-state": "unchecked", value: "company", class: "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only", id: "company", tabindex: "-1", "data-radix-collection-item": "", onClick: () => {
        deliveryState.givenName = '';
        deliveryState.familyName = '';
        deliveryState.type = 'company';
      } }), h("label", { class: joinClass('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary font-ns cursor-pointer transition delay-0 duration-300 ease-in-out', deliveryState.type === 'company' ? 'border-black/50' : ''), htmlFor: "company" }, h("div", { class: "py-2" }, h("svg", { width: "26", height: "22", viewBox: "0 0 20 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M0.816406 16H19.1838M2.22928 1V16M12.1194 1V16M17.7709 4.75V16M5.05503 4.125H5.76146M5.05503 6.625H5.76146M5.05503 9.125H5.76146M8.58721 4.125H9.29365M8.58721 6.625H9.29365M8.58721 9.125H9.29365M5.05503 16V13.1875C5.05503 12.67 5.52975 12.25 6.11468 12.25H8.23399C8.81892 12.25 9.29365 12.67 9.29365 13.1875V16M1.52284 1H12.8258M12.1194 4.75H18.4773M14.9451 7.875H14.9527V7.88167H14.9451V7.875ZM14.9451 10.375H14.9527V10.3817H14.9451V10.375ZM14.9451 12.875H14.9527V12.8817H14.9451V12.875Z", stroke: "black", "stroke-linecap": "round", "stroke-linejoin": "round" }))), i18next.t('shippingInfromation.form.button.company'))))));
    return (h(Host, null, h("section", null, h("div", { class: "rounded-md p-6 mb-4 bg-white flex flex-col gap-3" }, h("div", { class: "" }, shippingInfoType), deliveryState.type === 'personal' ? (h("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, h("charma-input", { required: deliveryState.type === 'personal', value: deliveryState.givenName, onValueChange: this.handleInputChange, label: i18next.t('shippingInfromation.form.given_name'), name: "givenName", id: "givenName", onBlur: this.handleBlur, error: this.getError('givenName') }), h("charma-input", { required: deliveryState.type === 'personal', value: deliveryState.familyName, onValueChange: this.handleInputChange, label: i18next.t('shippingInfromation.form.family_name'), name: "familyName", id: "familyName", onBlur: this.handleBlur, error: this.getError('familyName') }))) : (h("div", { class: "grid grid-cols-1 gap-6 " }, h("charma-input", { required: deliveryState.type === 'company', value: deliveryState.organizationName, onValueChange: this.handleInputChange, label: i18next.t('shippingInfromation.form.organization_name'), name: "organizationName", id: "organizationName", onBlur: this.handleBlur, error: this.getError('organizationName') }))), h("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, h("charma-input", { required: true, value: deliveryState.phone, onValueChange: this.handleInputChange, label: i18next.t('shippingInfromation.form.phone'), name: "phone", id: "phone", onBlur: this.handleBlur, error: this.getError('phone') }), h("charma-input", { value: deliveryState.careOf, onValueChange: this.handleInputChange, label: i18next.t('shippingInfromation.form.care_of'), name: "careOf", id: "careOf", onBlur: this.handleBlur, error: this.getError('careOf') })), h("div", { class: "" }, h("charma-input", { required: true, value: deliveryState.email, onValueChange: this.handleInputChange, label: i18next.t('shippingInfromation.form.email'), name: "email", id: "email", onBlur: this.handleBlur, error: this.getError('email') })), h("div", { class: "" }, h("charma-input", { required: true, value: deliveryState.streetAddress, onValueChange: this.handleInputChange, label: i18next.t('shippingInfromation.form.street_address'), name: "streetAddress", id: "streetAddress", onBlur: this.handleBlur, error: this.getError('streetAddress') })), h("div", { class: "" }, h("charma-input", { value: deliveryState.streetAddress2, onValueChange: this.handleInputChange, label: i18next.t('shippingInfromation.form.street_address2'), name: "streetAddress2", id: "streetAddress2", onBlur: this.handleBlur, error: this.getError('streetAddress2') })), h("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, h("charma-input", { required: true, value: deliveryState.postalCode, onValueChange: this.handleInputChange, label: i18next.t('shippingInfromation.form.postal_code'), name: "postalCode", id: "postalCode", onBlur: this.handleBlur, error: this.getError('postalCode') }), h("charma-input", { required: true, value: deliveryState.city, onValueChange: this.handleInputChange, label: i18next.t('shippingInfromation.form.city'), name: "city", id: "city", onBlur: this.handleBlur, error: this.getError('city') })), h("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, h("charma-dropdown", { required: true, defaultValue: {
        label: 'Sweden',
        value: 'SE',
      }, onValueChange: e => {
        deliveryState.country = e.detail;
      }, label: i18next.t('shippingInfromation.form.country'), name: "country", id: "country", options: this.options })), h("div", { class: "relative py-2 mb-2" }, h("charma-textarea", { label: i18next.t('shippingInfromation.form.comment'), value: deliveryState.comment, onChange: (e) => {
        deliveryState.comment = e.target.value;
      }, name: "comment", id: "comment" }))))));
  }
  static get is() { return "charma-delivery"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["charma-delivery.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["charma-delivery.css"]
    };
  }
  static get properties() {
    return {
      "language": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "language",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=charma-delivery.js.map
