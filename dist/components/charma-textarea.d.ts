import type { Components, JSX } from "../types/components";

interface CharmaTextarea extends Components.CharmaTextarea, HTMLElement {}
export const CharmaTextarea: {
  prototype: CharmaTextarea;
  new (): CharmaTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
