import { TLocalizeString, TPagination } from './common.types';
export type country = {
  id: string;
  name: TLocalizeString;
};
export interface TGetAllCountriesResponse extends TPagination {
  countries: Array<country>;
}
