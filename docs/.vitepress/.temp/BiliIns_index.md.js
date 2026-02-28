import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"📘 BiliIns 使用文档","description":"","frontmatter":{},"headers":[],"relativePath":"BiliIns/index.md","filePath":"BiliIns/index.md"}');
const _sfc_main = { name: "BiliIns/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="📘-biliins-使用文档" tabindex="-1">📘 BiliIns 使用文档 <a class="header-anchor" href="#📘-biliins-使用文档" aria-label="Permalink to &quot;📘 BiliIns 使用文档&quot;">​</a></h1><h2 id="🌟-核心功能" tabindex="-1">🌟 核心功能 <a class="header-anchor" href="#🌟-核心功能" aria-label="Permalink to &quot;🌟 核心功能&quot;">​</a></h2><ul><li>一键启动本地分析服务</li><li>单个稿件分析（含AI评论解析）</li><li>多稿件数据对比</li><li>可视化网页看板</li></ul><h2 id="🖥-使用指南" tabindex="-1">🖥 使用指南 <a class="header-anchor" href="#🖥-使用指南" aria-label="Permalink to &quot;🖥 使用指南&quot;">​</a></h2><p>**请<a href="https://github.com/ZeroMi-Studio/BiliIns/releases/" target="_blank" rel="noreferrer">下载发行版</a>，可开箱即用</p><h3 id="第一步-启动服务端" tabindex="-1">第一步：启动服务端 <a class="header-anchor" href="#第一步-启动服务端" aria-label="Permalink to &quot;第一步：启动服务端&quot;">​</a></h3><ol><li>双击运行 <code>BiliIns.exe</code>（Windows系统，小白推荐，开箱即用）</li><li>或通过命令行启动：<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">python</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> python/main.py</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> #系统装有Python</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">python/python.exe</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> python/main.py</span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"> #或使用程序自带编译器</span></span></code></pre></div></li><li>成功启动后将自动打开浏览器访问 <code>http://127.0.0.1:1145</code></li></ol><blockquote><p>💡 启动会读取配置文件 <code>setting.json</code>，请确保文件存在</p></blockquote><h3 id="第二步-分析稿件数据" tabindex="-1">第二步：分析稿件数据 <a class="header-anchor" href="#第二步-分析稿件数据" aria-label="Permalink to &quot;第二步：分析稿件数据&quot;">​</a></h3><h4 id="单个稿件分析" tabindex="-1">单个稿件分析 <a class="header-anchor" href="#单个稿件分析" aria-label="Permalink to &quot;单个稿件分析&quot;">​</a></h4><ol><li>在网页输入框输入BV号</li><li>点击「查询」按钮</li><li>查看生成的分析报告： <ul><li>基础数据面板</li><li>观众互动趋势图</li><li><strong>AI评论风向分析</strong></li></ul></li></ol><h4 id="多稿件对比" tabindex="-1">多稿件对比 <a class="header-anchor" href="#多稿件对比" aria-label="Permalink to &quot;多稿件对比&quot;">​</a></h4><ol><li>输入多个BV号（目前最多支持三个）</li><li>查看对比报表： <ul><li>数据差异图表</li><li>互动趋势对比</li><li>详细数据对比</li></ul></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("BiliIns/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
