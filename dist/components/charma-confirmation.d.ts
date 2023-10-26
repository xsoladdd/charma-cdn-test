import type { Components, JSX } from "../types/components";

interface CharmaConfirmation extends Components.CharmaConfirmation, HTMLElement {}
export const CharmaConfirmation: {
  prototype: CharmaConfirmation;
  new (): CharmaConfirmation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
