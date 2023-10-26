import type { KyInstance } from 'ky/distribution/types/ky';
import { BaseUrl, KeyData, OrderDto, QueryDto } from './types';
import { TGetBrandsResponse } from '../types/brands.types';
import { TGetAllCategoriesResponse } from '../types/categories.types';
import { TGetOrdersResponse, TGetOrderResponse, TCreateOrderResponse } from '../types/orders.types';
import { TGetProductsResponse, TGetProductResponse } from '../types/products.types';
export interface API {
  api: KyInstance | null;
  key: string;
  init(key: string): Promise<void>;
  getCategories(query?: QueryDto): Promise<any>;
  getBrands(query?: QueryDto): Promise<any>;
  getProducts(query?: QueryDto): Promise<any>;
  getProduct(id: string): Promise<any>;
  getOrder(orderNumber: string): Promise<any>;
  getOrders(query?: QueryDto): Promise<any>;
  createOrder(order: OrderDto): Promise<any>;
  getKey(key: string): Promise<KeyData>;
  setBaseUrl(url: string): void;
}
export declare class CharmaAPI implements API {
  api: KyInstance | null;
  key: string;
  keyMetadata: KeyData;
  private baseUrl;
  init(key: string): Promise<void>;
  setBaseUrl(baseUrl: BaseUrl): void;
  getCategories(query?: QueryDto): Promise<TGetAllCategoriesResponse>;
  getCountries(): Promise<any>;
  getBrands(query?: QueryDto): Promise<TGetBrandsResponse>;
  getProducts(query?: QueryDto): Promise<TGetProductsResponse>;
  getProduct(id: string): Promise<TGetProductResponse>;
  getOrder(orderNumber: string): Promise<TGetOrdersResponse>;
  getOrders(query?: QueryDto): Promise<TGetOrderResponse>;
  createOrder(order: OrderDto): Promise<TCreateOrderResponse>;
  getKey(): Promise<KeyData>;
}
