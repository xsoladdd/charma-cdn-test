import { IWidgetState } from '../../store/types';
export declare class CharmaPayment {
  language: string;
  handleBlur: (e: FocusEvent) => void;
  handleInputChange: (e: CustomEvent) => void;
  getError(id: keyof IWidgetState['billingFormErrors']): string;
  render(): any;
}
