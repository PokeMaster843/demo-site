import "@/assets/main.scss";

// Vue
import { createApp } from "vue";
import App from "@/App.vue";

// VueRouter
import { router } from "@/router";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import vuetify from "@/plugins/vuetify";

// Pinia
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(pinia);
app.mount("#app");
