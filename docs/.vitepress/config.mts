import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  search: {
    provider: 'local'
  },
  
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
        text: '关于我们',
        collapsible: true, // 是否可折叠
        collapsed: false,  // 默认是否折叠
        items: [
          { text: '关于我们', link: '/About-Us' },
          { text: 'Github', link: 'https://github.com/ZeroMi-Studio/' },
          { text: 'Gitee', link: 'https://gitee.com/zermi' }
        ]
      },
      {
        text: 'BiliIns',
        collapsible: true, // 是否可折叠
        collapsed: true,  // 默认是否折叠
        items: [
          { text: '开始使用', link: '/BiliIns/' },
          { text: '配置文件', link: '/BiliIns/Setting' },
          { text: '帮助与答疑', link: '/BiliIns/Q&A' },
          { text: '开发文档', link: '/BiliIns/Dev-Guide' }
        ]
      }
    ]

    //socialLinks: [
    //  { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    //]
  }
})
