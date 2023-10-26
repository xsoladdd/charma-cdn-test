import type { Components, JSX } from "../types/components";

interface CharmaDelivery extends Components.CharmaDelivery, HTMLElement {}
export const CharmaDelivery: {
  prototype: CharmaDelivery;
  new (): CharmaDelivery;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
