import { Host, h } from "@stencil/core";
import { joinClass } from "../../../utils/joinClass";
export class CharmaRadioGroup {
  constructor() {
    this.handleChange = (event) => {
      this.valueChange.emit(event.target.value);
    };
    this.label = '';
    this.name = 'charma-radio-group';
    this.options = [];
    this.selected = '';
    this.required = true;
    this.error = false;
    this.orientation = 'vertical';
  }
  render() {
    return (h(Host, null, h("slot", null, h("div", { class: joinClass('flex ', this.orientation === 'vertical' ? 'flex-row gap-5' : ' flex-col') }, this.options.map(({ title, value }) => {
      return (h("div", { class: "flex items-center mb-4 " }, h("input", { onChange: this.handleChange, id: `rb-${title}`, type: "radio", name: `rb-${title}`, value: value, class: "h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 cursor-pointer font-body text-base transition-transform", checked: this.selected === value }), h("label", { htmlFor: `rb-${title}`, class: "font-body text-base text-gray-900 ml-2 block capitalize cursor-pointer" }, title)));
    })))));
  }
  static get is() { return "charma-radio-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["charma-radio-group.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["charma-radio-group.css"]
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
        "defaultValue": "'charma-radio-group'"
      },
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "TRadioOptions",
          "resolved": "{ title: string; value: string; }[]",
          "references": {
            "TRadioOptions": {
              "location": "import",
              "path": "./type",
              "id": "src/components/ui/charma-radio-group/type.ts::TRadioOptions"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "[]"
      },
      "selected": {
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
        "attribute": "selected",
        "reflect": true,
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
        "defaultValue": "true"
      },
      "error": {
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
        "attribute": "error",
        "reflect": false,
        "defaultValue": "false"
      },
      "orientation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'vertical' | 'horizontal'",
          "resolved": "\"horizontal\" | \"vertical\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "orientation",
        "reflect": false,
        "defaultValue": "'vertical'"
      }
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
//# sourceMappingURL=charma-radio-group.js.map
