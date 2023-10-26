import type { Components, JSX } from "../types/components";

interface CharmaDropdown extends Components.CharmaDropdown, HTMLElement {}
export const CharmaDropdown: {
  prototype: CharmaDropdown;
  new (): CharmaDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
