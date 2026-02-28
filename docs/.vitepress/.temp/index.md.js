import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"ZeroMi Studio","text":"共携手，赴所爱","tagline":"ZeroMi Studio门户首页","actions":[{"theme":"brand","text":"前往官网","link":"https://www.zeromi.cn/"},{"theme":"alt","text":"联系我们","link":"mailto:contact@zeromi.cn"},{"theme":"alt","text":"文档","link":"/About-Us"}]},"features":[{"title":"BiliIns","details":"Bilibili稿件综合数据分析","link":"https://github.com/ZeroMi-Studio/BiliIns/"},{"title":"CC-TEAM-WEB-Zero","details":"CC-TEAM-WEB-Zero 团队官网","link":"https://github.com/ZeroMi-Work/CC-TEAM-WEB-Zero/"},{"title":"RedstoneCode Studio","details":"一个可视化 Minecraft 插件开发工具","link":"https://github.com/Benxpawa/RedstoneCodeStudio"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
