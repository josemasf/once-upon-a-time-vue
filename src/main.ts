import { createApp } from "vue";
import { createPinia } from "pinia";
import { setupWorker } from "msw";
import { handlers } from "@/mocks/handlers";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

if (import.meta.env.MODE === "msw") {
  const worker = setupWorker(...handlers);
  worker.start();
}

app.mount("#app");
