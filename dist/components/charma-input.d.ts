import type { Components, JSX } from "../types/components";

interface CharmaInput extends Components.CharmaInput, HTMLElement {}
export const CharmaInput: {
  prototype: CharmaInput;
  new (): CharmaInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
