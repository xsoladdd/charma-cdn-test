import { Host, h } from "@stencil/core";
import i18next from "i18next";
import { billingState, widgetState } from "../../store";
import * as illus from "./helper";
export class CharmaOrderPlaced {
  constructor() {
    this.svgArray = [illus.svg1, illus.svg3, illus.svg5, illus.svg6, illus.svg10];
    this.language = undefined;
    this.handleClose = undefined;
  }
  generateRandomNumber() {
    return Math.floor(Math.random() * (this.svgArray.length + 1)); // Generates a random number between 0 (inclusive) and 6 (exclusive)
  }
  render() {
    return (h(Host, null, h("section", null, h("div", { class: "rounded-md px-6 pb-6 mb-4 bg-white flex flex-col font-ns place-items-center text-center" }, h("div", { class: "pt-[100px] pb-[5px] " }, this.svgArray[this.generateRandomNumber()]), h("p", { class: "text-xl font-medium mb-2 " }, i18next.t('thankyou.subtitle')), h("p", { class: "mb-2", innerHTML: i18next.t('thankyou.order', { order: widgetState.order.shortId }) }), h("p", { class: "mb-2", innerHTML: i18next.t('thankyou.desc', {
        email: billingState.email,
      }) })))));
  }
  static get is() { return "charma-order-placed"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["charma-order-placed.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["charma-order-placed.css"]
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
      "handleClose": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "() => void",
          "resolved": "() => void",
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
//# sourceMappingURL=charma-order-placed.js.map
