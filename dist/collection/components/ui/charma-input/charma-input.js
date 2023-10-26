import { Host, h } from "@stencil/core";
import { joinClass } from "../../../utils/joinClass";
import i18next from "i18next";
export class CharmaInput {
  constructor() {
    this.setFocus = () => {
      this.focused = !this.focused;
    };
    this.handleChange = (event) => {
      this.valueChange.emit(event.target.value);
    };
    this.label = '';
    this.name = 'charma-input';
    this.focused = false;
    this.value = '';
    this.placeholder = '';
    this.required = false;
    this.error = '';
  }
  render() {
    const errorBlock = h("span", { class: "text-xs text-red-500" }, i18next.t(this.error));
    return (h(Host, null, h("div", { class: "grid gap-2 font-ns" }, h("label", { class: joinClass('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', this.focused ? ' border-black' : ''), htmlFor: this.name }, this.label, " ", this.required && h("span", { class: "text-red-500" }, "*")), h("div", { class: "flex flex-col gap-1" }, h("input", { type: "text", class: joinClass('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', this.error ? 'border-red-500' : ''), id: this.name, name: this.name, placeholder: this.placeholder, onChange: this.handleChange, value: this.value }), this.error && errorBlock))));
  }
  static get is() { return "charma-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["charma-input.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["charma-input.css"]
    };
  }
  static get properties() {
    return {
      "label": {
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
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "name": {
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
        "attribute": "name",
        "reflect": false,
        "defaultValue": "'charma-input'"
      },
      "value": {
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
        "attribute": "value",
        "reflect": true,
        "defaultValue": "''"
      },
      "placeholder": {
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
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "error": {
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
        "attribute": "error",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get states() {
    return {
      "focused": {}
    };
  }
  static get events() {
    return [{
        "method": "valueChange",
        "name": "valueChange",
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
// 209213  +63288910000 2023101929002553
//# sourceMappingURL=charma-input.js.map
