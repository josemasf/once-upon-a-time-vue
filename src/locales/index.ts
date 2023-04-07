import { createI18n } from "vue-i18n";
import en from "./en.json";
import eu from "./eu.json";
import fr from "./fr.json";
import es from "./es.json";

const i18nConfig = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: en,
    es: es,
    eu: eu,
    fr: fr,
  },
});

export { i18nConfig };
