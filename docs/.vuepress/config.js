module.exports = {
    dest:'./dist',
    title: 'Zbots 文档',
    description: '魔方机器人',
    themeConfig: {
        sidebar:[
            {
                title: '功能',
                children: [
                    '/guide/switch.md',
                    '/guide/scramble.md',
                    '/guide/wca.md',
                    '/guide/comp.md',
                    '/guide/cuber.md',
                    '/guide/cubepic.md',
                    '/guide/admin.md',
                    '/guide/welcome.md',
                    '/guide/express.md',
                    '/guide/picture.md',
                    '/guide/learn.md',
                    '/guide/repeat.md'
                ]
            },
            {
                title:"附录",
                children:[
                    '/appendices/botml.md'
                ]
            }
        ],
        sidebarDepth:3
    }
}

