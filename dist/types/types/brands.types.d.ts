import { TLocalizeString } from './common.types';
type TBrand = {
  id: string;
  name: TLocalizeString;
};
export type TGetBrandsResponse = {
  brands: Array<TBrand>;
  totalPages: number;
  page: number;
  take: number;
};
export {};
