import { Host, h } from "@stencil/core";
import { joinClass } from "../../../utils/joinClass";
import i18next from "i18next";
import { widgetState } from "../../../store";
import { joinArray } from "../../../utils/joinArray";
export class CharmaCard {
  constructor() {
    this.selected = false;
    this.product = {};
    this.isDisplayOnly = false;
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    const picture = (h("div", { class: joinClass('rounded-xl h-[100px] border-[1px] mb-[5px] overflow-hidden flex place-content-center place-items-center ', this.isDisplayOnly ? 'w-[142px]' : 'w-[220px]') }, h("img", { class: "h-[90px]", alt: "Placeholder", src: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.thumb })));
    const content = (h("div", { class: joinClass('font-ns pt-[5px] px-[10px] flex flex-col  w-full justify-between', this.isDisplayOnly ? '' : 'h-[180px]') }, h("div", { class: "flex flex-col gap-[.35rem]" }, h("span", { class: "block text-[16px] font-medium" }, widgetState.language === 'en' && ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.name) === null || _d === void 0 ? void 0 : _d.en) ? (_f = (_e = this.product) === null || _e === void 0 ? void 0 : _e.name) === null || _f === void 0 ? void 0 : _f.en : (_h = (_g = this.product) === null || _g === void 0 ? void 0 : _g.name) === null || _h === void 0 ? void 0 : _h.sv), h("span", { class: " text-[10px] font-light text-[#5E5E5E]" }, `${widgetState.language === 'en' && ((_k = (_j = this.product) === null || _j === void 0 ? void 0 : _j.brandName) === null || _k === void 0 ? void 0 : _k.en)
      ? joinArray([(_m = (_l = this.product) === null || _l === void 0 ? void 0 : _l.brandName) === null || _m === void 0 ? void 0 : _m.en, (_p = (_o = this.product) === null || _o === void 0 ? void 0 : _o.variantName) === null || _p === void 0 ? void 0 : _p.en])
      : joinArray([(_r = (_q = this.product) === null || _q === void 0 ? void 0 : _q.brandName) === null || _r === void 0 ? void 0 : _r.sv, (_t = (_s = this.product) === null || _s === void 0 ? void 0 : _s.variantName) === null || _t === void 0 ? void 0 : _t.sv])}`), !this.isDisplayOnly && (h("div", { class: "text-[10px] font-normal text-[#5E5E5E] overflow-scroll h-[70px]" }, widgetState.language === 'en' ? (_v = (_u = this.product) === null || _u === void 0 ? void 0 : _u.description) === null || _v === void 0 ? void 0 : _v.en : (_x = (_w = this.product) === null || _w === void 0 ? void 0 : _w.description) === null || _x === void 0 ? void 0 : _x.sv))), h("div", { class: "flex justify-between pt-[5px] w-full" }, h("span", { class: "font-normal text-[14px]" }, (_z = (_y = this.product) === null || _y === void 0 ? void 0 : _y.price) === null || _z === void 0 ? void 0 :
      _z.value, " ", h("span", { class: " text-[#727272] font-light text-[12px]" }, i18next.t('productCard.excludedVat'))), !this.isDisplayOnly && (h("svg", { xmlns: "http://www.w3.org/2000/svg", class: joinClass('w-5 h-5 ', this.selected ? 'text-black' : 'text-gray-300'), viewBox: "0 0 20 20", fill: "currentColor" }, h("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule": "evenodd" }))))));
    return (h(Host, null, h("div", { class: joinClass(' min-h-[100px] h-full rounded-xl flex flex-col place-items-center  border-[1px] cursor-pointer bg-white overflow-hidden', this.selected && !this.isDisplayOnly ? 'border-[#000] ' : 'hover:border-[#a7a7a7] transition duration-100 ease-out hover:ease-in', this.isDisplayOnly ? 'w-[160px] py-[8px]' : 'w-[240px] py-[10px]') }, picture, content)));
  }
  static get is() { return "charma-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["charma-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["charma-card.css"]
    };
  }
  static get properties() {
    return {
      "selected": {
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
        "attribute": "selected",
        "reflect": true,
        "defaultValue": "false"
      },
      "product": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Partial<TGetProductResponse>",
          "resolved": "{ id?: string; articleNumber?: string; productIdentifier?: string; availableDeliveryMethods?: string[]; mpn?: string; name?: TLocalizeString; variantName?: TLocalizeString; description?: TLocalizeString; brandName?: TLocalizeString; colorCode?: string; image?: TImage; countryOfOrigin?: string; hsCode?: string; ean?: string; price?: Price; variants?: string[]; sustainable?: boolean; availableStock?: AvailableStock; availableOptions?: AvailableOptions[]; }",
          "references": {
            "Partial": {
              "location": "global",
              "id": "global::Partial"
            },
            "TGetProductResponse": {
              "location": "import",
              "path": "../../../types/products.types",
              "id": "src/types/products.types.ts::TGetProductResponse"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "{}"
      },
      "isDisplayOnly": {
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
        "attribute": "is-display-only",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=charma-card.js.map
