export default {
  themeConfig: {
    siteTitle: 'Forward',
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/guild/installation' },
      { text: '组件', link: '/examples/button' },
    ],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/installation',
            },
            {
              text: '快速开始',
              link: '/guild/quickstart',
            },
          ],
        },
      ],
      '/examples/': [
        {
          text: 'Basic 基础组件',
          items: [
            { text: 'Button 按钮', link: '/examples/button' },
            { text: 'Border 边框', link: '/examples/border' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/phm-front/forward-ui' },
    ],
  },
}
