/* widget custom elements */
export { CharmaCard as CharmaCard } from '../types/components/ui/charma-card/charma-card';
export { defineCustomElement as defineCustomElementCharmaCard } from './charma-card';
export { CharmaConfirmation as CharmaConfirmation } from '../types/components/charma-confirmation/charma-confirmation';
export { defineCustomElement as defineCustomElementCharmaConfirmation } from './charma-confirmation';
export { CharmaDelivery as CharmaDelivery } from '../types/components/charma-delivery/charma-delivery';
export { defineCustomElement as defineCustomElementCharmaDelivery } from './charma-delivery';
export { CharmaDropdown as CharmaDropdown } from '../types/components/ui/charma-dropdown/charma-dropdown';
export { defineCustomElement as defineCustomElementCharmaDropdown } from './charma-dropdown';
export { CharmaButton as CharmaGiftingButton } from '../types/components/charma-gifting-button/charma-gifting-button';
export { defineCustomElement as defineCustomElementCharmaGiftingButton } from './charma-gifting-button';
export { CharmaInput as CharmaInput } from '../types/components/ui/charma-input/charma-input';
export { defineCustomElement as defineCustomElementCharmaInput } from './charma-input';
export { CharmaOrderPlaced as CharmaOrderPlaced } from '../types/components/charma-order-placed/charma-order-placed';
export { defineCustomElement as defineCustomElementCharmaOrderPlaced } from './charma-order-placed';
export { CharmaPayment as CharmaPayment } from '../types/components/charma-payment/charma-payment';
export { defineCustomElement as defineCustomElementCharmaPayment } from './charma-payment';
export { CharmaProducts as CharmaProducts } from '../types/components/charma-products/charma-products';
export { defineCustomElement as defineCustomElementCharmaProducts } from './charma-products';
export { CharmaRadioGroup as CharmaRadioGroup } from '../types/components/ui/charma-radio-group/charma-radio-group';
export { defineCustomElement as defineCustomElementCharmaRadioGroup } from './charma-radio-group';
export { CharmaTextarea as CharmaTextarea } from '../types/components/ui/charma-textarea/charma-textarea';
export { defineCustomElement as defineCustomElementCharmaTextarea } from './charma-textarea';
export { CharmaWidget as CharmaWidget } from '../types/components/charma-widget/charma-widget';
export { defineCustomElement as defineCustomElementCharmaWidget } from './charma-widget';

/**
 * Get the base path to where the assets can be found. Use "setAssetPath(path)"
 * if the path needs to be customized.
 */
export declare const getAssetPath: (path: string) => string;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

/**
 * Used to specify a nonce value that corresponds with an application's CSP.
 * When set, the nonce will be added to all dynamically created script and style tags at runtime.
 * Alternatively, the nonce value can be set on a meta tag in the DOM head
 * (<meta name="csp-nonce" content="{ nonce value here }" />) which
 * will result in the same behavior.
 */
export declare const setNonce: (nonce: string) => void

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
