import { TImage, TLocalizeString, TPagination } from './common.types';
export interface TGetProductsResponse extends TPagination {
  products: Array<TProductsReponse>;
}
export type TGetProductResponse = TProductsReponse;
export type TProductsReponse = {
  id: string;
  articleNumber: string;
  productIdentifier: string;
  availableDeliveryMethods?: Array<string>;
  mpn: string;
  name: TLocalizeString;
  variantName: TLocalizeString;
  description: TLocalizeString;
  brandName: TLocalizeString;
  colorCode?: string;
  image?: TImage;
  countryOfOrigin: string;
  hsCode: string;
  ean: string;
  price: Price;
  variants: (string | undefined)[];
  sustainable: boolean;
  availableStock?: AvailableStock;
  availableOptions?: Array<AvailableOptions>;
};
export interface AvailableOptions {
  id: string;
  name: TLocalizeString;
  description: TLocalizeString;
  price: Price;
}
export interface AvailableStock {
  internal: number;
  external: number;
}
export interface Price {
  currency: string;
  tax: number;
  value: number;
}
