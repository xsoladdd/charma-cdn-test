import { createStore } from "@stencil/store";
import i18next from "i18next";
const { state: deliveryState, reset: resetDeliveryState } = createStore({
  givenName: '',
  familyName: '',
  phone: '',
  streetAddress: '',
  streetAddress2: '',
  city: '',
  postalCode: '',
  country: 'SE',
  careOf: '',
  comment: '',
  greeting: '',
  method: null,
  organizationName: '',
  type: 'personal',
  email: '',
});
const { state: billingState, reset: resetBillingState } = createStore({
  method: '',
  city: '',
  country: 'SE',
  email: '',
  organizationName: '',
  organizationRegistrationId: '',
  postalCode: '',
  invoiceType: 'PDF',
  message: '',
});
const { state: widgetState, reset: resetWidgetState } = createStore({
  products: [],
  selectedProducts: [],
  order: {},
  isDeliveryValid: false,
  isBillingValid: false,
  hasError: false,
  errors: null,
  error: undefined,
  preselectedProduct: null,
  language: i18next.language ? i18next.language : 'en',
  billingFormErrors: {},
  deliveryFormErrors: {},
});
export function resetAllStates() {
  resetWidgetState();
  resetDeliveryState();
  resetBillingState();
}
export { widgetState, billingState, deliveryState, resetWidgetState, resetDeliveryState, resetBillingState };
//# sourceMappingURL=index.js.map
