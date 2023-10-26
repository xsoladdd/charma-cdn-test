import type { Components, JSX } from "../types/components";

interface CharmaPayment extends Components.CharmaPayment, HTMLElement {}
export const CharmaPayment: {
  prototype: CharmaPayment;
  new (): CharmaPayment;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
