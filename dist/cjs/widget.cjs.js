'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6e94f518.js');
const appGlobals = require('./app-globals-9fee2074.js');
require('./index-ad4a9512.js');

/*
 Stencil Client Patch Browser v4.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('widget.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["charma-radio-group.cjs",[[1,"charma-radio-group",{"label":[1],"name":[1],"options":[16],"selected":[513],"required":[4],"error":[4],"orientation":[1]}]]],["charma-card_11.cjs",[[1,"charma-widget",{"buttonSize":[1,"button-size"],"language":[1],"productId":[1,"product-id"],"showWidget":[32],"disabled":[32],"isSubmitting":[32],"isProductLoading":[32],"step":[32],"hasPreselectedProduct":[32]},[[8,"charma-widget-open","openWidget"],[8,"charma-widget-close","closeWidget"],[8,"invalid-charma-key","invalidKey"]],{"showWidget":["onModalOpen"]}],[1,"charma-delivery",{"language":[1]}],[1,"charma-payment",{"language":[1]}],[1,"charma-confirmation",{"language":[1],"navigateTab":[16]}],[1,"charma-products"],[1,"charma-gifting-button",{"size":[1],"type":[1],"disabled":[4],"loading":[4]}],[1,"charma-order-placed",{"language":[1],"handleClose":[16]}],[1,"charma-card",{"selected":[516],"product":[16],"isDisplayOnly":[4,"is-display-only"]}],[1,"charma-dropdown",{"options":[16],"label":[1],"required":[4],"error":[4],"name":[1],"defaultValue":[16],"selectedOption":[32],"isOpen":[32]}],[1,"charma-input",{"label":[1],"name":[1],"value":[513],"placeholder":[1],"required":[4],"error":[1],"focused":[32]}],[1,"charma-textarea",{"label":[1],"name":[1],"value":[513],"placeholder":[1],"required":[4],"error":[1],"focused":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=widget.cjs.js.map