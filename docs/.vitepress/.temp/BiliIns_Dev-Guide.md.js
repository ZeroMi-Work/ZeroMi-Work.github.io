import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"BiliIns/Dev-Guide.md","filePath":"BiliIns/Dev-Guide.md"}');
const _sfc_main = { name: "BiliIns/Dev-Guide.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="开发指南" tabindex="-1">开发指南 <a class="header-anchor" href="#开发指南" aria-label="Permalink to &quot;开发指南&quot;">​</a></h2><h3 id="前端文件" tabindex="-1">前端文件 <a class="header-anchor" href="#前端文件" aria-label="Permalink to &quot;前端文件&quot;">​</a></h3><p>位于源码文件 &#39;/pages/&#39; 目录下</p><p>-- pages</p><p>--- index.html</p><p>--- script.js</p><h3 id="后端文件" tabindex="-1">后端文件 <a class="header-anchor" href="#后端文件" aria-label="Permalink to &quot;后端文件&quot;">​</a></h3><p>位于源码文件 &#39;/python/&#39; 目录下</p><p>-- python</p><p>--- main.py</p><p>--- commentAcquisition.py</p><h3 id="其他文件" tabindex="-1">其他文件 <a class="header-anchor" href="#其他文件" aria-label="Permalink to &quot;其他文件&quot;">​</a></h3><p>其余文件为python编译器文件，非必要请勿删除/修改，修改完成后直接原位置替换原文件即可</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("BiliIns/Dev-Guide.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DevGuide = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  DevGuide as default
};
