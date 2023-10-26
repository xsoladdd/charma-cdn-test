import { charmaAPI } from "./index";
import { deliveryState, widgetState } from "../store";
import { deliverySchema, openWidgetSchema } from "./schemas";
export class Widget {
  async init(key) {
    if (!key.trim().length) {
      throw new Error('Widget key cannot be empty');
    }
    if (!this.charmaAPI) {
      this.charmaAPI = charmaAPI;
    }
    await this.charmaAPI.init(key);
  }
  setAPIBaseUrl(url) {
    charmaAPI.setBaseUrl(url);
  }
  setDeliveryData(deliveryData) {
    const delivery = deliverySchema.safeParse(deliveryData);
    if (!delivery.success) {
      throw new Error('Invalid delivery data');
    }
    Object.assign(deliveryState, delivery.data);
  }
  show(data) {
    let eventData;
    if (data) {
      const result = openWidgetSchema.safeParse(data);
      if (!result.success) {
        throw new Error('Invalid widget data! You must pass valid delivery or billing data.');
      }
      if (Object.keys(result.data).length) {
        eventData = result.data;
      }
      if (result.data.productId) {
        widgetState.preselectedProduct = result.data.productId;
      }
    }
    const openEvent = new CustomEvent('charma-widget-open', {
      bubbles: true,
      detail: eventData,
    });
    document.body.dispatchEvent(openEvent);
  }
  close() {
    const closeEvent = new CustomEvent('charma-widget-close', {
      bubbles: true,
    });
    document.body.dispatchEvent(closeEvent);
  }
}
//# sourceMappingURL=widget.js.map
