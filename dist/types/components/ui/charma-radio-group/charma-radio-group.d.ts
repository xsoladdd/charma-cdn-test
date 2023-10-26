import { Event, EventEmitter } from '../../../stencil-public-runtime';
import { TRadioOptions } from './type';
export declare class CharmaRadioGroup {
  label: string;
  name: string;
  options: TRadioOptions;
  selected: string;
  required: boolean;
  error: boolean;
  orientation: 'vertical' | 'horizontal';
  valueChange: EventEmitter<string>;
  handleChange: (event: Event) => void;
  render(): any;
}
