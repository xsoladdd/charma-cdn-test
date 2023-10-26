import type { Components, JSX } from "../types/components";

interface CharmaOrderPlaced extends Components.CharmaOrderPlaced, HTMLElement {}
export const CharmaOrderPlaced: {
  prototype: CharmaOrderPlaced;
  new (): CharmaOrderPlaced;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
