import { createI18n } from "vue-i18n";
import en from "./en.json";
import eu from "./eu.json";
import fr from "./fr.json";
import es from "./es.json";
import ca from "./ca.json";
import gl from "./gl.json";
import pt from "./pt.json";
import it from "./it.json";
import de from "./de.json";

const i18nConfig = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: en,
    es: es,
    eu: eu,
    fr: fr,
    ca: ca,
    gl: gl,
    pt: pt,
    it: it,
    de: de,
  },
});

export { i18nConfig };
