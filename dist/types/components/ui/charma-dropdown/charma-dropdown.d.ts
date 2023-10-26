import { EventEmitter } from '../../../stencil-public-runtime';
export interface DropdownOption {
  label: string;
  value: string;
}
export declare class CharmaDropdown {
  selectedOption: DropdownOption;
  isOpen: boolean;
  options: DropdownOption[];
  label: string;
  required: boolean;
  error: boolean;
  name: string;
  defaultValue: DropdownOption;
  valueChange: EventEmitter<string>;
  componentWillLoad(): void;
  onSetValue: (value: DropdownOption) => void;
  toggleDropdown: () => void;
  render(): any;
}
