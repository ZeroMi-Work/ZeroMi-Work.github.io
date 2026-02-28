import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"RCStudio/Q&A.md","filePath":"RCStudio/Q&A.md"}');
const _sfc_main = { name: "RCStudio/Q&A.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="暂无内容" tabindex="-1">暂无内容 <a class="header-anchor" href="#暂无内容" aria-label="Permalink to &quot;暂无内容&quot;">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("RCStudio/Q&A.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Q_A = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Q_A as default
};
