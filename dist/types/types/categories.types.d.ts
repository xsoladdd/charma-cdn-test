import { TLocalizeString, TPagination } from './common.types';
export type ICategory = {
  id: string;
  name: TLocalizeString;
};
export type category = {
  id: string;
  name: TLocalizeString;
};
export interface TGetAllCategoriesResponse extends TPagination {
  categories: Array<category>;
}
