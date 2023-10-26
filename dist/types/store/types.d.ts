import { TProductsReponse } from '../types/products.types';
import { TInvoiceOptionArray } from '../types/widget';
export interface IWidgetState {
  products: TProductsReponse[];
  selectedProducts: string[];
  order: {
    shortId?: any;
    createdAt?: any;
  };
  isDeliveryValid: boolean;
  isBillingValid: boolean;
  hasError: boolean;
  errors: any;
  preselectedProduct: any;
  language: string;
  billingFormErrors: {
    city?: string[];
    organizationRegistrationId?: string[];
    email?: string[];
    organizationName?: string[];
    postalCode?: string[];
  };
  deliveryFormErrors: {
    type?: string[];
    givenName?: string[];
    familyName?: string[];
    organizationName?: string[];
    city?: string[];
    country?: string[];
    phone?: string[];
    email?: string[];
    careOf?: string[];
    postalCode?: string[];
    streetAddress?: string[];
    streetAddress2?: string[];
  };
  error: 'form error' | 'product error' | 'submitting error' | undefined;
}
export interface IBillingState {
  method: string;
  city: string;
  country: string;
  email: string;
  organizationName: string;
  organizationRegistrationId: string;
  postalCode: string;
  invoiceType: TInvoiceOptionArray;
  message: string;
}
export interface IDeliveryState {
  givenName: string;
  familyName: string;
  phone: string;
  streetAddress: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  country: string;
  careOf: string;
  comment: string;
  greeting: string;
  method: any;
  organizationName: string;
  type: 'personal' | 'company';
  email: string;
}
