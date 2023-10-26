import { API } from './api/api';
import { Widget } from './api/widget';
declare global {
  interface Window {
    Charma: {
      widget: Widget;
      api: API;
    };
  }
}
export default function (): void;
