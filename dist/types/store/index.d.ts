import { IBillingState, IDeliveryState, IWidgetState } from './types';
declare const deliveryState: IDeliveryState, resetDeliveryState: () => void;
declare const billingState: IBillingState, resetBillingState: () => void;
declare const widgetState: IWidgetState, resetWidgetState: () => void;
export declare function resetAllStates(): void;
export { widgetState, billingState, deliveryState, resetWidgetState, resetDeliveryState, resetBillingState };
