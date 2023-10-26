import { DropdownOption } from '../ui/charma-dropdown/charma-dropdown';
import { CharmaInputCustomEvent } from '../../components';
import { IWidgetState } from '../../store/types';
export declare class CharmaDelivery {
  language: string;
  options: DropdownOption[];
  handleInputChange(e: CharmaInputCustomEvent<string>): void;
  handleBlur: (e: FocusEvent) => void;
  getError(id: keyof IWidgetState['deliveryFormErrors']): string;
  render(): any;
}
