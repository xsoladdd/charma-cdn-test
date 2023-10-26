import type { Components, JSX } from "../types/components";

interface CharmaProducts extends Components.CharmaProducts, HTMLElement {}
export const CharmaProducts: {
  prototype: CharmaProducts;
  new (): CharmaProducts;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
