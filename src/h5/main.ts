import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";

import "@/common/style/reset.css";
import "@/components/svg-icon";
import SvgIcon from "@/components/svg-icon/src/index.vue";

// 设置主题
import { initTheme, themeOptions } from "@/theme";
initTheme("light");
// 注册vant组件
import { registerVant } from "@/h5/plugins";
// 引入组件样式
import "vant/lib/index.css";

const app = createApp(App).use(store).use(router);
registerVant(app);

// 全局组件注册
const components = [SvgIcon];
components.map((component) => {
  app.component(component.name, component);
});

app.mount("#app");
