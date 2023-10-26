import type { Components, JSX } from "../types/components";

interface CharmaCard extends Components.CharmaCard, HTMLElement {}
export const CharmaCard: {
  prototype: CharmaCard;
  new (): CharmaCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
