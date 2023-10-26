export type ErrorResponse = {
  message: string;
  errorCode: number;
};
export type TLocalizeString = {
  en?: string | undefined;
  sv?: string | undefined;
};
export type TPrice = {
  currency: string;
  tax: number;
  value: number;
};
export type TLocalizeImage = {
  url: string;
};
export interface TPagination {
  totalPages: number;
  page: number;
  take: number;
}
export interface TImage {
  thumb: string;
  full: string;
}
