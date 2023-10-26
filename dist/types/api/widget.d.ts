import { Delivery } from './schemas';
import { OpenWidgetData } from './types';
export declare class Widget {
  private charmaAPI;
  init(key: string): Promise<void>;
  setAPIBaseUrl(url: string): void;
  setDeliveryData(deliveryData: Delivery): void;
  show(data?: OpenWidgetData): void;
  close(): void;
}
