import { EventEmitter, Event } from '../../../stencil-public-runtime';
export declare class CharmaInput {
  label: string;
  name: string;
  focused: boolean;
  value: string;
  placeholder: string;
  required: boolean;
  error: string;
  valueChange: EventEmitter<string>;
  setFocus: () => void;
  handleChange: (event: Event) => void;
  render(): any;
}
