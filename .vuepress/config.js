module.exports = {
    title: 'RealDesk',
    description: 'RealDesk 사용자 가이드 및 개발자 문서',
    plugins: ['@vuepress/last-updated'],
    base: '/',
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({ breaks: true });
            md.use(require('markdown-it-task-checkbox'));
        }
    },
    themeConfig: {
      nav: [
        { text: 'QuickGuide', link: '/quick-guide/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Developer', link: '/developer/' },
        { text: 'RealDesk', link: 'http://realdesk.kr' },
      ],
      sidebar: {
        '/quick-guide/': [
          '/quick-guide/',
          {
            title: '기능별 도움말',
            path: '/guide/',
          }
        ],
        '/guide': [
          '/quick-guide/',
          {
            title: '기능별 도움말',
            path: '/guide/',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/guide/',
              // '/guide/new-ticket',
              '/guide/features/how-to-use-coupons',
              '/guide/ticket-merge',
              '/guide/keyword-tags',
              '/guide/view-source',
              '/guide/checkout-spam',
            ],
          },
          {
            title: '화면별 도움말',
            path: '/guide/pages',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/guide/pages/',
              '/guide/pages/ticket-view',
            ],
          },
        ],
        '/developer': [
          {
            path: '/developer/',
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/developer/',
            ],
          },
        ]
      },
    },
}
