import { Host, h } from "@stencil/core";
import i18next from "i18next";
import { joinClass } from "../../utils/joinClass";
export class CharmaButton {
  constructor() {
    this.size = 'default';
    this.type = 'contained';
    this.disabled = false;
    this.loading = false;
  }
  render() {
    return (h(Host, null, h("button", { class: joinClass('inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 font-ns gap-2', this.disabled ? 'cursor-not-allowed bg-gray-200' : 'bg-white') }, this.loading ? (h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: " h-4 w-4 animate-spin" }, h("path", { d: "M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "16", viewBox: "0 0 18 16", fill: "none" }, h("path", { d: "M10.9718 1.56523C11.4859 1.14704 12.0931 0.850802 12.7455 0.699986C13.3979 0.54917 14.0775 0.547915 14.7305 0.696321C15.5082 0.87553 16.218 1.26413 16.7784 1.81746C17.3389 2.3708 17.7271 3.06641 17.8986 3.82438C18.1001 4.69739 18.0125 5.60992 17.6483 6.43172C17.284 7.25352 16.6616 7.9426 15.8701 8.40062C14.3785 9.03781 12.708 9.26952 11.1568 9.67501C13.1256 10.8915 15.0348 12.2238 17.0633 13.4982C17.302 13.672 17.5406 13.7878 17.6599 14.0195C17.4329 14.5191 17.1088 14.9715 16.7053 15.3519C16.407 15.236 16.1684 15.0622 15.9297 14.9464C13.6626 13.4403 11.3358 11.9342 9.06862 10.486C6.50315 12.1659 3.93769 13.7878 1.37223 15.4098C0.926853 14.9731 0.561634 14.4657 0.29235 13.9095C2.49984 12.5192 4.64767 11.129 6.91482 9.79666C5.83708 9.59561 4.77915 9.3049 3.75274 8.92775C2.61916 8.58019 1.36626 8.05885 0.709983 7.07409C0.207053 6.34542 -0.041254 5.47905 0.00171769 4.60289C0.0446893 3.72672 0.376662 2.88719 0.948631 2.20822C2.26119 0.296624 5.42327 0.0649162 7.09381 1.68687C8.22738 2.61371 8.58536 4.06188 8.94333 5.33628C9.3013 3.99816 9.83826 2.54999 10.9718 1.56523ZM3.15612 2.66584C2.603 2.92967 2.17282 3.38647 1.9516 3.94493C1.73037 4.50339 1.7344 5.12235 1.96288 5.67805C2.1274 6.01961 2.36793 6.32148 2.66712 6.56189C2.96632 6.80229 3.31672 6.97525 3.69308 7.06829C5.01179 7.59104 6.39608 7.94166 7.80975 8.11098C7.39212 6.60488 7.09381 5.04085 6.3182 3.6506C6.18059 3.38129 5.98873 3.14153 5.75399 2.94549C5.51924 2.74946 5.24637 2.60114 4.95153 2.50932C4.6567 2.4175 4.34588 2.38405 4.03749 2.41093C3.7291 2.43781 3.4294 2.52449 3.15612 2.66584ZM12.7617 2.60791C11.6878 3.0134 11.3895 4.11402 11.0315 4.98292C10.6703 6.02732 10.3715 7.09109 10.1366 8.16891C11.6604 7.85926 13.1566 7.43314 14.6112 6.89451C15.0854 6.70063 15.4851 6.36715 15.7537 5.94105C16.0224 5.51496 16.1466 5.01775 16.1087 4.51951C16.075 4.15224 15.9516 3.79809 15.7486 3.48646C15.5456 3.17484 15.269 2.91475 14.9416 2.72781C14.6143 2.54086 14.2458 2.43246 13.8666 2.41161C13.4875 2.39075 13.1087 2.45805 12.7617 2.60791Z", fill: "black" }))), this.disabled ? h("span", null, " ", i18next.t('widget_button_disabled')) : h("span", null, " ", i18next.t('widget_button')))));
  }
  static get is() { return "charma-gifting-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["charma-gifting-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["charma-gifting-button.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonSizes",
          "resolved": "\"default\" | \"small\" | ({ [x: number]: string; [Symbol.iterator]: () => IterableIterator<string>; readonly length: number; toString: () => string; concat: (...strings: string[]) => string; slice: (start?: number, end?: number) => string; indexOf: (searchString: string, position?: number) => number; lastIndexOf: (searchString: string, position?: number) => number; includes: (searchString: string, position?: number) => boolean; at: (index: number) => string; big: () => string; link: (url: string) => string; sub: () => string; sup: () => string; replace: { (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string; }; normalize: { (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string): string; }; charAt: (pos: number) => string; charCodeAt: (index: number) => number; localeCompare: { (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }; match: { (regexp: string | RegExp): RegExpMatchArray; (matcher: { [Symbol.match](string: string): RegExpMatchArray; }): RegExpMatchArray; }; search: { (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }; split: { (separator: string | RegExp, limit?: number): string[]; (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]; }; substring: (start: number, end?: number) => string; toLowerCase: () => string; toLocaleLowerCase: (locales?: string | string[]) => string; toUpperCase: () => string; toLocaleUpperCase: (locales?: string | string[]) => string; trim: () => string; substr: (from: number, length?: number) => string; codePointAt: (pos: number) => number; endsWith: (searchString: string, endPosition?: number) => boolean; repeat: (count: number) => string; startsWith: (searchString: string, position?: number) => boolean; anchor: (name: string) => string; blink: () => string; bold: () => string; fixed: () => string; fontcolor: (color: string) => string; fontsize: { (size: number): string; (size: string): string; }; italics: () => string; strike: () => string; padStart: (maxLength: number, fillString?: string) => string; padEnd: (maxLength: number, fillString?: string) => string; trimEnd: () => string; trimStart: () => string; trimLeft: () => string; trimRight: () => string; matchAll: (regexp: RegExp) => IterableIterator<RegExpMatchArray>; valueOf: () => string; })",
          "references": {
            "ButtonSizes": {
              "location": "local",
              "path": "/Users/ericsonfuntanar/Dev/charma/packages/widget/src/components/charma-gifting-button/charma-gifting-button.tsx",
              "id": "src/components/charma-gifting-button/charma-gifting-button.tsx::ButtonSizes"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonTypes",
          "resolved": "\"contained\" | \"outlined\"",
          "references": {
            "ButtonTypes": {
              "location": "local",
              "path": "/Users/ericsonfuntanar/Dev/charma/packages/widget/src/components/charma-gifting-button/charma-gifting-button.tsx",
              "id": "src/components/charma-gifting-button/charma-gifting-button.tsx::ButtonTypes"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'contained'"
      },
      "disabled": {
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
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "loading": {
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
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=charma-gifting-button.js.map
