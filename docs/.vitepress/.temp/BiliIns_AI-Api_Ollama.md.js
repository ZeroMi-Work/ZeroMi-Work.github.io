import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ollama 对接指南","description":"","frontmatter":{},"headers":[],"relativePath":"BiliIns/AI-Api/Ollama.md","filePath":"BiliIns/AI-Api/Ollama.md"}');
const _sfc_main = { name: "BiliIns/AI-Api/Ollama.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ollama-对接指南" tabindex="-1">Ollama 对接指南 <a class="header-anchor" href="#ollama-对接指南" aria-label="Permalink to &quot;Ollama 对接指南&quot;">​</a></h1><p><strong>咕咕，鸽子咕咕了，还没写哦，等待更新吧</strong></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("BiliIns/AI-Api/Ollama.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Ollama = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Ollama as default
};
