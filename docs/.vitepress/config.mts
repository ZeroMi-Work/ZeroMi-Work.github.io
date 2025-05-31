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
        collapsible: true, 
        collapsed: false,
        items: [
          { text: '关于我们', link: '/About-Us' },
          { text: 'Github', link: 'https://github.com/ZeroMi-Studio/' },
          { text: 'Gitee', link: 'https://gitee.com/zermi' }
        ]
      },
      {
        text: 'BiliIns',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '开始使用', link: '/BiliIns/' },
          { text: '配置文件', link: '/BiliIns/Setting' },
          {
            text: 'AI对接',
            collapsible: true,
            items: [
              { text: 'Ollama', link: '/BiliIns/AI-Api/Ollama' },
              { text: 'DeepSeek', link: '/BiliIns/AI-Api/DeepSeek' }
            ]
          },
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
