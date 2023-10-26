import { Event, EventEmitter } from '../../../stencil-public-runtime';
export declare class CharmaTextarea {
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
