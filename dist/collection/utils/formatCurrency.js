import i18next from "i18next";
export const formatCurrency = (value) => {
  let language = i18next.language;
  switch (language) {
    case 'en':
      language = 'en-US';
      break;
    case 'sv':
      language = 'sv-SE';
      break;
    default:
      language = 'sv-SE';
  }
  return Intl.NumberFormat(language, {
    style: 'currency',
    currency: 'SEK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
};
//# sourceMappingURL=formatCurrency.js.map
