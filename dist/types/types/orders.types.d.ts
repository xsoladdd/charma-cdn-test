import { TLocalizeString, TPagination, TPrice } from './common.types';
export type TGetCartResponse = {
  id: string;
};
export interface TGetOrdersResponse extends TPagination {
  orders: Array<TGetOrderResponse>;
}
export interface TCreateOrderResponse extends TGetOrderResponse {
}
export type TGetOrderResponse = {
  orderLines: Array<OrderLines>;
  delivery: DeliveryAddress;
  billingAddress: BillingAddress;
  totalPrice: TPrice;
  deliveryMethodCode: string;
  fulfilmentStatus: TLocalizeString | string;
  financialStatus: TLocalizeString | string;
  shippedAt?: string | null;
  shortId: number;
  createdAt: string;
};
export interface Personalization {
  greeting: string;
  greetingStyle: string;
}
export interface BillingAddress extends Address {
  invoiceType: string;
  VAT: string;
  reference: string;
  organisationRegistrationId: string;
}
export interface Address {
  deliveryMethodCode?: string | null;
  deliveryDate?: string | null;
  email?: string | null;
  phone?: string | null;
  name?: string | null;
  careOf?: string | null;
  attention?: string | null;
  streetAddress?: string | null;
  streetAddress2?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: string | null;
  note?: string | null;
  organizationName?: string | null;
}
export type DeliveryAddress = Address;
export interface OrderLines {
  productArticleNumber?: string | null;
  quantity: number;
  options: string[];
}
