import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZeroMi Studio",
  description: "共携手，赴所爱",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '官网', link: 'https://www.zeromi.cn/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ]

    //socialLinks: [
    //  { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    //]
  }
})
