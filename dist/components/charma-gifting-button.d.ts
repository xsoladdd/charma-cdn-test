import type { Components, JSX } from "../types/components";

interface CharmaGiftingButton extends Components.CharmaGiftingButton, HTMLElement {}
export const CharmaGiftingButton: {
  prototype: CharmaGiftingButton;
  new (): CharmaGiftingButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
