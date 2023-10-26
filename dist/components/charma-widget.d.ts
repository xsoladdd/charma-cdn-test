import type { Components, JSX } from "../types/components";

interface CharmaWidget extends Components.CharmaWidget, HTMLElement {}
export const CharmaWidget: {
  prototype: CharmaWidget;
  new (): CharmaWidget;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
