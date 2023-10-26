import { h, Host } from "@stencil/core";
import { joinClass } from "../../../utils/joinClass";
export class CharmaDropdown {
  constructor() {
    this.onSetValue = (value) => {
      this.selectedOption = value;
      this.isOpen = false;
      this.valueChange.emit(value.value);
    };
    this.toggleDropdown = () => {
      this.isOpen = !this.isOpen;
    };
    this.selectedOption = { label: '', value: '' };
    this.isOpen = false;
    this.options = [];
    this.label = 'Options';
    this.required = false;
    this.error = false;
    this.name = undefined;
    this.defaultValue = undefined;
  }
  componentWillLoad() {
    if (this.defaultValue) {
      this.selectedOption = this.defaultValue;
    }
  }
  render() {
    const dropdownMenu = (h("ul", { role: "listbox", class: joinClass('absolute  drop-shadow-sm  flex flex-col py-2 px-1 w-full top-[3.6rem] rounded-md border border-input z-50 overflow-scroll max-h-[150px] bg-white ') }, this.options.map(option => (h("li", { class: "font-ns  hover:bg-[#e2e2e2] px-[15px] py-1 text-sm cursor-pointer rounded-sm ", onClick: e => {
        e.stopPropagation();
        this.onSetValue(option);
      } }, option.label)))));
    return (h(Host, null, h("div", { class: "grid gap-2 relative" }, h("label", { class: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-ns capitalize", htmlFor: "month" }, this.label, " ", this.required && h("span", { class: "text-red-500" }, "*")), h("button", { type: "button", role: "combobox", "aria-controls": "radix-:R2ckpmmkr9hja:", "aria-expanded": "false", "aria-autocomplete": "none", dir: "ltr", "data-state": "closed", "data-placeholder": "", class: "flex h-9 w-full items-center font-ns justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50", id: "month", onClick: this.toggleDropdown }, h("span", null, h("span", null, this.selectedOption.label)), h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: "h-4 w-4 opacity-50", "aria-hidden": "true" }, h("path", { d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))), this.isOpen && dropdownMenu)));
  }
  static get is() { return "charma-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["charma-dropdown.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["charma-dropdown.css"]
    };
  }
  static get properties() {
    return {
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "DropdownOption[]",
          "resolved": "DropdownOption[]",
          "references": {
            "DropdownOption": {
              "location": "local",
              "path": "/Users/ericsonfuntanar/Dev/charma/packages/widget/src/components/ui/charma-dropdown/charma-dropdown.tsx",
              "id": "src/components/ui/charma-dropdown/charma-dropdown.tsx::DropdownOption"
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
        "defaultValue": "'Options'"
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
        "reflect": false
      },
      "defaultValue": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "DropdownOption",
          "resolved": "DropdownOption",
          "references": {
            "DropdownOption": {
              "location": "local",
              "path": "/Users/ericsonfuntanar/Dev/charma/packages/widget/src/components/ui/charma-dropdown/charma-dropdown.tsx",
              "id": "src/components/ui/charma-dropdown/charma-dropdown.tsx::DropdownOption"
            }
          }
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
  static get states() {
    return {
      "selectedOption": {},
      "isOpen": {}
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
//# sourceMappingURL=charma-dropdown.js.map
