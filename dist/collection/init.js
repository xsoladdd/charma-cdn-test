import { widget, charmaAPI } from "./api";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { local } from "./local";
export default function () {
  i18next
    .use(LanguageDetector)
    .init({
    lng: 'en',
    debug: true,
    detection: {
      order: ['navigator', 'htmlTag', 'localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: local,
  })
    .then(() => {
    // i18next.changeLanguage('en');
  });
  window.Charma = {
    widget,
    api: charmaAPI,
  };
}
//# sourceMappingURL=init.js.map
