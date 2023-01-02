/**
 *  ┌─────────────────────────────────────────────────────────────┐
 *  │┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐│
 *  ││Esc│!1 │@2 │#3 │$4 │%5 │^6 │&7 │*8 │(9 │)0 │_- │+= │|\ │`~ ││
 *  │├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┤│
 *  ││ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{[ │}] │ BS  ││
 *  │├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤│
 *  ││ Ctrl │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  ││
 *  │├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────┬───┤│
 *  ││ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│Shift │Fn ││
 *  │└─────┬──┴┬──┴──┬┴───┴───┴───┴───┴───┴──┬┴───┴┬──┴┬─────┴───┘│
 *  │      │Fn │ Alt │         Space         │ Alt │Win│   HHKB   │
 *  │      └───┴─────┴───────────────────────┴─────┴───┘          │
 *  └─────────────────────────────────────────────────────────────┘
 *
 * @module index
 * @author  XM
 * @description 描述
 * @since 创建时间  2022-12-30 18:59:40
 * @FilePath \project\emo\H5_live\h5-live\src\theme\inex.ts
 */
// 引入 字体变量插件
import cssVars from "css-vars-ponyfill";
// const isSupportCssVar =
//   window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");

interface IThemeKey {
  [key: string]: string;
}
interface IThemeOptions {
  [key: string]: IThemeKey;
}

const baseSize: IThemeKey = {
  "--font-size-large-x": "22px",
  "--font-size-large": "18px",
  "--font-size-medium-x": "16px",
  "--font-size-medium": "14px",
  "--font-size-small-x": "12px",
  "--font-size-small": "10px",
};

export const themeOptions: IThemeOptions = {
  // 深色
  dark: {
    ...baseSize,
    "--primary-color": "#4176fa",
    "--primary-color-hover": "#3d72fa",
    "--primary-background-color": "#f0f6ff",
    "--primary-border": "#dce1e5",
  },
  // 浅色
  light: {
    ...baseSize,
    "--primary-color": "#4176fa",
    "--primary-color-hover": "#3d72fa",
    "--primary-background-color": "#f0f6ff",
    "--primary-border": "#dce1e5",
  },
};
/**
 * @param {*} theme 指定换肤的key
 */
export const initTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
  cssVars({
    watch: true,
    // variables 自定义属性名/值对的集合
    variables: themeOptions[theme],
    // 当添加，删除或修改其<link>或<style>元素的禁用或href属性时，ponyfill将自行调用
    onlyLegacy: false, // false 默认将css变量编译为浏览器识别的css样式 true 当浏览器不支持css变量的时候将css变量编译为识别的css
  });
};
