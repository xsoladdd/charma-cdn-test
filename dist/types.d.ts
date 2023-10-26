type TLocalizeString = {
  en?: string | undefined;
  sv?: string | undefined;
  // Add more language fields as needed
};

type TPrice = {
  currency: string;
  tax: number;
  value: number;
};

type TStock = {
  internal: number;
  external: number;
};
