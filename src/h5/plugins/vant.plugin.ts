/* eslint-disable prettier/prettier */
import { App } from "vue";

import {  NavBar,Button, Swipe, Loading, Toast } from "vant";
export function registerVant(app: App): void {
  app
    .use(NavBar)
    .use(Button)
    .use(Swipe)
    .use(Loading)
    .use(Toast);
}
