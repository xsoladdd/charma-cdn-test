import { p as promiseResolve, b as bootstrapLazy } from './index-8b9ae2f4.js';
export { s as setNonce } from './index-8b9ae2f4.js';
import { g as globalScripts } from './app-globals-5cf9b84c.js';
import './index-a9d695e8.js';

/*
 Stencil Client Patch Browser v4.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["charma-radio-group",[[1,"charma-radio-group",{"label":[1],"name":[1],"options":[16],"selected":[513],"required":[4],"error":[4],"orientation":[1]}]]],["charma-card_11",[[1,"charma-widget",{"buttonSize":[1,"button-size"],"language":[1],"productId":[1,"product-id"],"showWidget":[32],"disabled":[32],"isSubmitting":[32],"isProductLoading":[32],"step":[32],"hasPreselectedProduct":[32]},[[8,"charma-widget-open","openWidget"],[8,"charma-widget-close","closeWidget"],[8,"invalid-charma-key","invalidKey"]],{"showWidget":["onModalOpen"]}],[1,"charma-delivery",{"language":[1]}],[1,"charma-payment",{"language":[1]}],[1,"charma-confirmation",{"language":[1],"navigateTab":[16]}],[1,"charma-products"],[1,"charma-gifting-button",{"size":[1],"type":[1],"disabled":[4],"loading":[4]}],[1,"charma-order-placed",{"language":[1],"handleClose":[16]}],[1,"charma-card",{"selected":[516],"product":[16],"isDisplayOnly":[4,"is-display-only"]}],[1,"charma-dropdown",{"options":[16],"label":[1],"required":[4],"error":[4],"name":[1],"defaultValue":[16],"selectedOption":[32],"isOpen":[32]}],[1,"charma-input",{"label":[1],"name":[1],"value":[513],"placeholder":[1],"required":[4],"error":[1],"focused":[32]}],[1,"charma-textarea",{"label":[1],"name":[1],"value":[513],"placeholder":[1],"required":[4],"error":[1],"focused":[32]}]]]], options);
});

//# sourceMappingURL=widget.js.map