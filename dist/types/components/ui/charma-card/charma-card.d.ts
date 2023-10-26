import { TGetProductResponse } from '../../../types/products.types';
export declare class CharmaCard {
  selected: boolean;
  product: Partial<TGetProductResponse>;
  isDisplayOnly: boolean;
  render(): any;
}
