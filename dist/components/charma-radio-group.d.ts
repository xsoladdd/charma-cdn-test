import type { Components, JSX } from "../types/components";

interface CharmaRadioGroup extends Components.CharmaRadioGroup, HTMLElement {}
export const CharmaRadioGroup: {
  prototype: CharmaRadioGroup;
  new (): CharmaRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
