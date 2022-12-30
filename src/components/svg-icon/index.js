const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("../../assets/svg", false, /\.svg$/);
requireAll(req);
// import SvgIcon from "./src/index";

// /* istanbul ignore next */
// SvgIcon.install = function (Vue) {
//   Vue.component(SvgIcon.name, SvgIcon);
// };

// export default SvgIcon;
