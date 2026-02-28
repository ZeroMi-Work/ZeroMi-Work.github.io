import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"❓ 常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"BiliIns/Q&A.md","filePath":"BiliIns/Q&A.md"}');
const _sfc_main = { name: "BiliIns/Q&A.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="❓-常见问题" tabindex="-1">❓ 常见问题 <a class="header-anchor" href="#❓-常见问题" aria-label="Permalink to &quot;❓ 常见问题&quot;">​</a></h1><h3 id="q1-为什么ai评论分析仅支持单个稿件" tabindex="-1">Q1: 为什么AI评论分析仅支持单个稿件？ <a class="header-anchor" href="#q1-为什么ai评论分析仅支持单个稿件" aria-label="Permalink to &quot;Q1: 为什么AI评论分析仅支持单个稿件？&quot;">​</a></h3><p>由于需要消耗大量计算资源，目前限制：</p><ul><li>每次只能分析1个视频的评论</li><li>默认随机抽选10条评论</li></ul><h3 id="q2-如何更新数据" tabindex="-1">Q2: 如何更新数据？ <a class="header-anchor" href="#q2-如何更新数据" aria-label="Permalink to &quot;Q2: 如何更新数据？&quot;">​</a></h3><ul><li>手动更新：刷新页面或重新点击查询按钮</li><li>强制更新：重启服务端</li></ul><h3 id="q3-支持哪些bv号格式" tabindex="-1">Q3: 支持哪些BV号格式？ <a class="header-anchor" href="#q3-支持哪些bv号格式" aria-label="Permalink to &quot;Q3: 支持哪些BV号格式？&quot;">​</a></h3><p>目前仅支持标准BV号：<code>BV1xx123x4x5</code></p><h2 id="⚠️-注意事项" tabindex="-1">⚠️ 注意事项 <a class="header-anchor" href="#⚠️-注意事项" aria-label="Permalink to &quot;⚠️ 注意事项&quot;">​</a></h2><ol><li>需要保持网络连接（调用B站官方API）</li><li>评论分析可能需要10-30秒加载，具体速度取决于电脑配置</li><li>建议关闭杀毒软件防火墙（如需本地API调用）</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("BiliIns/Q&A.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Q_A = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Q_A as default
};
