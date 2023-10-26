import { Host, h } from "@stencil/core";
import { billingState, deliveryState, widgetState } from "../../store";
import i18next from "i18next";
export class CharmaConfirmation {
  constructor() {
    this.language = undefined;
    this.navigateTab = undefined;
  }
  render() {
    const confirmationSection = ({ title, leftData, rightData, handleClick }) => {
      return (h("div", { class: "" }, h("div", { class: "flex justify-between  place-items-end" }, h("p", null, title), h("button", { class: "inline-flex items-center justify-center rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-black shadow hover:bg-white/90 h-9 px-4 py-2 font-ns gap-2 border-gray-300 border-[1px]", onClick: handleClick }, h("span", null, h("svg", { stroke: "currentColor", fill: "none", "stroke-width": "1.5", viewBox: "0 0 24 24", "aria-hidden": "true", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5" }, h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" }))))), h("div", { class: "py-4 flex gap-12  pl-4 font-light text-[.85rem]" }, h("ul", { class: "flex gap-1 flex-col " }, leftData
        .filter(({ value }) => value)
        .map(({ label, value }) => {
        return (h("li", { class: "" }, label, ": ", h("span", { class: 'font-normal' }, value)));
      })), h("ul", { class: "flex gap-1 flex-col" }, rightData
        .filter(({ value }) => value)
        .map(({ label, value }) => {
        return (h("li", { class: "" }, label, ": ", h("span", { class: 'font-normal' }, value)));
      })))));
    };
    const productList = (h("div", { class: "" }, h("div", { class: "flex justify-between  place-items-end" }, h("p", null, i18next.t('confirmation.selectedProducts')), !widgetState.preselectedProduct && (h("button", { class: "inline-flex items-center justify-center rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-black shadow hover:bg-white/90 h-9 px-4 py-2 font-ns gap-2 border-gray-300 border-[1px]", onClick: () => this.navigateTab(1) }, h("span", null, h("svg", { stroke: "currentColor", fill: "none", "stroke-width": "1.5", viewBox: "0 0 24 24", "aria-hidden": "true", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5" }, h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" })))))), h("div", { class: "py-4 flex gap-12  pl-4 font-light text-[.85rem]" }, h("div", { class: "grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-4" }, widgetState.products
      .filter(item => widgetState.selectedProducts.includes(item.id))
      .map(product => {
      return (h("charma-card", { key: product.id, id: product.id, selected: widgetState.selectedProducts.includes(product.id), product: product, isDisplayOnly: true }));
    })))));
    return (h(Host, null, h("section", { class: "rounded-md px-6 pb-6 mb-4 bg-white flex flex-col font-ns" }, productList, !widgetState.isDeliveryValid &&
      confirmationSection({
        title: i18next.t('confirmation.shippingInformation'),
        handleClick: () => {
          if (!widgetState.isDeliveryValid)
            this.navigateTab(2);
        },
        leftData: [
          deliveryState.type === 'company' && { label: i18next.t('shippingInfromation.form.organizationName'), value: deliveryState.organizationName },
          deliveryState.type === 'personal' && { label: i18next.t('shippingInfromation.form.given_name'), value: deliveryState.givenName },
          deliveryState.type === 'personal' && { label: i18next.t('shippingInfromation.form.family_name'), value: deliveryState.familyName },
          { label: i18next.t('shippingInfromation.form.email'), value: deliveryState.email },
          { label: i18next.t('shippingInfromation.form.street_address'), value: deliveryState.streetAddress },
          { label: i18next.t('shippingInfromation.form.street_address2'), value: deliveryState.streetAddress2 },
          { label: i18next.t('shippingInfromation.form.postal_code'), value: deliveryState.postalCode },
          { label: i18next.t('shippingInfromation.form.city'), value: deliveryState.city },
        ],
        rightData: [
          { label: i18next.t('shippingInfromation.form.care_of'), value: deliveryState.careOf },
          { label: i18next.t('shippingInfromation.form.phone'), value: deliveryState.phone },
          { label: i18next.t('shippingInfromation.form.country'), value: deliveryState.country },
        ],
      }), !widgetState.isBillingValid &&
      confirmationSection({
        title: i18next.t('confirmation.billingInformation'),
        handleClick: () => {
          if (!widgetState.isBillingValid)
            this.navigateTab(3);
        },
        leftData: [
          { label: i18next.t('billingInformation.form.organization_number'), value: billingState.organizationRegistrationId },
          { label: i18next.t('billingInformation.form.company_name'), value: billingState.organizationName },
          { label: i18next.t('billingInformation.form.email'), value: billingState.email },
        ],
        rightData: [
          { label: i18next.t('billingInformation.form.invoice_delivery'), value: billingState.invoiceType },
          { label: i18next.t('billingInformation.form.zip'), value: billingState.postalCode },
          { label: i18next.t('billingInformation.form.city'), value: billingState.city },
          // { label: i18next.t('billingInformation.form.care_of'), value: billingState.country },
        ],
      }))));
  }
  static get is() { return "charma-confirmation"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["charma-confirmation.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["charma-confirmation.css"]
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
      },
      "navigateTab": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(index: number) => void",
          "resolved": "(index: number) => void",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      }
    };
  }
}
//# sourceMappingURL=charma-confirmation.js.map
