import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";

import "@/common/style/reset.css";
import "@/components/svg-icon";
import SvgIcon from "@/components/svg-icon/src/index.vue";

const app = createApp(App).use(store).use(router);

const components = [SvgIcon];
components.map((component) => {
  app.component(component.name, component);
});

app.mount("#app");
