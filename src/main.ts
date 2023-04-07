import { createApp } from "vue";
import { createPinia } from "pinia";
import { setupWorker } from "msw";
import { handlers } from "@/mocks/handlers";
import { createI18n } from "vue-i18n";

const messages = {
  es: {
    welcomeMessage: "Bienvenido!",
  },
  en: {
    welcomeMessage: "Welcome!",
  },
  fr: {
    welcomeMessage: "Bienvenue!",
  },
  "es-pv": {
    welcomeMessage: "Egun on!",
  },
};

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages,
});

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);

if (import.meta.env.MODE === "msw") {
  const worker = setupWorker(...handlers);
  worker.start();
}

app.mount("#app");
