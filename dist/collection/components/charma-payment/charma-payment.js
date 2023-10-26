import { Host, h } from "@stencil/core";
import i18next from "i18next";
import { billingState, widgetState } from "../../store";
import { invoiceOptionArray } from "../../types/widget";
export class CharmaPayment {
  constructor() {
    this.handleBlur = (e) => {
      var _a;
      const key = e.target['id'];
      if ((_a = widgetState.billingFormErrors) === null || _a === void 0 ? void 0 : _a[key]) {
        widgetState.billingFormErrors[key] = undefined;
        widgetState.error = undefined;
      }
    };
    this.handleInputChange = (e) => {
      billingState[e.target['id']] = e.detail;
    };
    this.language = undefined;
  }
  getError(id) {
    var _a, _b, _c;
    return ((_b = (_a = widgetState.billingFormErrors) === null || _a === void 0 ? void 0 : _a[id]) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (_c = widgetState.billingFormErrors) === null || _c === void 0 ? void 0 : _c[id][0] : '';
  }
  render() {
    return (h(Host, null, h("section", null, h("div", { class: "rounded-md px-6 pb-6 pt-3 mb-4 bg-white flex flex-col gap-3" }, h("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, h("charma-input", { required: true, label: i18next.t('billingInformation.form.organization_number'), name: "organizationRegistrationId", onValueChange: this.handleInputChange, value: billingState.organizationRegistrationId, onBlur: this.handleBlur, error: this.getError('organizationRegistrationId'), id: "organizationRegistrationId" }), h("charma-input", { required: true, onValueChange: this.handleInputChange, label: i18next.t('billingInformation.form.company_name'), name: "organizationName", value: billingState.organizationName, error: this.getError('organizationName'), onBlur: this.handleBlur, id: "organizationName" })), h("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, h("charma-dropdown", { options: invoiceOptionArray.map(opt => ({
        label: opt,
        value: opt,
      })), required: true, defaultValue: {
        value: billingState.invoiceType,
        label: billingState.invoiceType,
      }, onValueChange: this.handleInputChange, label: i18next.t('billingInformation.form.invoice_delivery'), name: "invoiceType", id: "invoiceType" }), h("charma-input", { value: billingState.email, onValueChange: this.handleInputChange, label: i18next.t('billingInformation.form.email'), name: "email", id: "email", error: this.getError('email'), onBlur: this.handleBlur, required: true })), h("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, h("charma-input", { required: true, value: billingState.postalCode, onValueChange: this.handleInputChange, label: i18next.t('billingInformation.form.zip'), name: "postalCode", id: "postalCode", error: this.getError('postalCode'), onBlur: this.handleBlur }), h("charma-input", { required: true, value: billingState.city, onValueChange: this.handleInputChange, label: i18next.t('billingInformation.form.city'), name: "city", id: "city", error: this.getError('city'), onBlur: this.handleBlur })), h("div", { class: "relative py-2 " }, h("charma-textarea", { value: billingState.message, onChange: (e) => {
        billingState.message = e.target.value;
      }, label: i18next.t('billingInformation.form.message'), id: "message" }))), widgetState.hasError && h("p", { class: "text-red-400 text-sm font-body" }, "*", i18next.t('errors.formError')))));
  }
  static get is() { return "charma-payment"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["charma-payment.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["charma-payment.css"]
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
//# sourceMappingURL=charma-payment.js.map
