type Sizes = 'default' | 'small';
export type ButtonTypes = 'outlined' | 'contained';
export type ButtonSizes = Sizes | Omit<string, Sizes>;
export declare class CharmaButton {
  size: ButtonSizes;
  type: ButtonTypes;
  disabled: boolean;
  loading: boolean;
  render(): any;
}
export {};
