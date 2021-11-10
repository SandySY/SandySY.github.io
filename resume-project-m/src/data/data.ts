export const list = {
    /* phaser: [
        {
            fileName: 'irresponsibleNinja',
            img: require('@images/ninja.jpg'),
            title: 'Phaser 小游戏 —— 不靠谱的忍者',
            tag: 'phaser',
            date: '2020-11-19'
        },
        {
            fileName: 'dragAndMatch',
            img: require('@images/match.jpg'),
            title: 'Phaser 小游戏——消消乐',
            tag: 'phaser',
            date: '2020-05-08'
        },
        {
            fileName: 'growingCircle',
            img: require('@images/circle.jpg'),
            title: '[Phaser] 小游戏——小球成长',
            tag: 'phaser',
            date: '2020-04-27'
        },
        {
            fileName: 'snapshotArea',
            img: require('@images/snapshot.jpg'),
            title: 'Phaser 画布截图',
            tag: 'phaser',
            date: '2020-04-27'
        },
        {
            fileName: 'helloworld',
            img: require('@images/helloworld.jpg'),
            title: 'Phaser 的基本使用',
            tag: 'phaser',
            date: '2020-04-26'
        }
    ], */
    javaScript: [
        {
            fileName: 'condition',
            img: require('@images/example3.png'),
            title: '优雅的逻辑判断',
            tag: 'javaScript',
            date: '2020-3-22'
        },
        {
            fileName: 'prototype-inherit',
            img: require('@images/performance_reference.jpg'),
            title: 'JavaScript 词法作用域及作用域链',
            tag: 'javaScript',
            date: '2019-9-1'
        },
        {
            fileName: 'others-frame',
            img: require('@images/example3.png'),
            title: 'JavaScript原型、原型链、继承之随记随查至通透',
            tag: 'javaScript',
            date: '2018-11-11'
        },
        {
            fileName: 'this-context',
            img: require('@images/js-this.png'),
            title: 'JavaScript This （ Context ） 之 完全拿下',
            tag: 'javaScript',
            date: '2020-6-23'
        },
        {
            fileName: 'uploadBigFile',
            img: require('@images/example3.png'),
            title: 'XX项目文件上传优化设计',
            tag: 'javaScript',
            date: '2021-10-15'
        }
    ],
    chrome: [
        {
            fileName: 'performance_reference',
            img: require('@images/performance_reference.jpg'),
            title: 'Chrome 开发者工具 —— Performance 使用参考',
            tag: 'chrome',
            date: '2020-10-02'
        },
        {
            fileName: 'performance_start',
            img: require('@images/chrome.jpg'),
            title: 'Chrome 开发者工具 —— Performance 快速入门',
            tag: 'chrome',
            date: '2020-10-28'
        },
        {
            fileName: 'command_menu',
            img: require('@images/command_menu.jpg'),
            title: 'Chrome 开发者工具 —— 命令行菜单（Command Menu）的使用',
            tag: 'chrome',
            date: '2020-11-12'
        }
    ],
    interview: [
        {
            fileName: 'interview2020',
            img: require('@images/interview.jpg'),
            title: '2020前端面试题汇总（2020.05-2020.10）',
            tag: '面试题',
            date: '2020-10-28'
        }
    ],
    vueNotes: [
        {
            fileName: 'vue3.0-news',
            img: require('@images/vue_logo.jpg'),
            title: 'Vue3.0 新特性以及使用经验总结',
            tag: 'vueNotes',
            date: '2021-03-26'
        },
        {
            fileName: 'api-notes',
            img: require('@images/vue_logo.jpg'),
            title: 'Vue 常用 API、高级 API',
            tag: 'vueNotes',
            date: '2019-06-02'
        },
        {
            fileName: 'optimize',
            img: require('@images/vue_logo.jpg'),
            title: 'Vue 常用性能优化',
            tag: 'vueNotes',
            date: '2020-05-16'
        },
        {
            fileName: 'recode-vue-router',
            img: require('@images/vue_example0.jpg'),
            title: '默写 Vue-Router',
            tag: 'vueNotes',
            date: '2020-09-03'
        }
    ]
};

declare interface Category {
    catagory: string;
    name: string;
}

const _category: Category[] = [];

for (const [key, value] of Object.entries(list)) {
    _category.push({
        catagory: key,
        name: `${value[0].tag}(${value.length})`
    });
}

export const category = _category;
