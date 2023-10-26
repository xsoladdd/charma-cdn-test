import { Host, h } from "@stencil/core";
import { widgetState } from "../../store";
export class CharmaProducts {
  render() {
    return (h(Host, null, h("div", { class: "grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" }, widgetState.products.map(product => {
      return (h("charma-card", { key: product.id, id: product.id, selected: widgetState.selectedProducts.includes(product.id), onClick: () => {
          this.productSelect.emit(product.id);
          widgetState.error = undefined;
        }, product: product }));
    }))));
  }
  static get is() { return "charma-products"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["charma-products.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["charma-products.css"]
    };
  }
  static get events() {
    return [{
        "method": "productSelect",
        "name": "productSelect",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=charma-products.js.map
