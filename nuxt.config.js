/*
 * @Author: your name
 * @Date: 2020-08-23 21:37:02
 * @LastEditTime: 2020-08-31 22:19:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /realworld-nuxtjs/nuxt.config.js
 */

// module.exports = {
//     // modules: [
//     //     '@nuxtjs/axios',
//     //     '@nuxtjs/proxy'
//     // ],
//     // proxy: [
//     //     [
//     //       '/api', 
//     //       { 
//     //         target: 'http://localhost:3000', // api主机
//     //         pathRewrite: { '^/api' : '/' }
//     //       }
//     //   ]
//     // ],
//     // nuxt.config.js
//     // modules: [
//     //     // 请求代理配置，解决跨域
//     //     '@gauseen/nuxt-proxy',
//     // ],
//     // proxyTable: {
//     //     '/api': { target: 'https://conduit.productionready.io', ws: false }
//     // },
// }
/**
 * Nuxt.js配置
 */
module.exports = {
    router: {
      linkActiveClass: "active", //激活路由添加的class名字
      // 自定义路由表规则
      extendRoutes(routes, resolve) {
        // 清除Nuxt.js基于pages目录生成的路由表规则
        routes.splice(0);
        routes.push(
          ...[
            {
              path: "/",
              component: resolve(__dirname, "pages/layout"),
              children: [
                {
                  name: "home",
                  path: "/", //默认子路由
                  component: resolve(__dirname, "pages/home"),
                },
                {
                  name: "login",  //登录
                  path: "/login",
                  component: resolve(__dirname, "pages/login"),
                },
                {
                  name: "register",  //注册
                  path: "/register",
                  component: resolve(__dirname, "pages/login"),
                },
                {
                  name: "profile",  //个人简介
                  path: "/profile/:username",
                  component: resolve(__dirname, "pages/profile"),
                },
                {
                  name: "settings",  //设置
                  path: "/settings",
                  component: resolve(__dirname, "pages/settings"),
                },
                {
                  name: "editor",   //发布文章
                  path: "/editor/:slug?",
                  component: resolve(__dirname, "pages/editor"),
                },
                { 
                  name: "article",    //文章详情
                  path: "/article/:slug?",
                  component: resolve(__dirname, "pages/article"),
                },
              ],
            },
          ]
        );
      }
    },
    server:{
      host:'0.0.0.0',//默认为localhost，只能本地访问，想对外也能访问，要设置成0.0.0.0 （0.0.0.0监听所有外网地址。在生产环境服务器上外网环境就能访问到了，在本地的话，局域网都能访问到了）
      port:3003
    },
    // 插件注册
    plugins: [
        // 波浪线开头表示从根路径触发
      '~/plugins/request.js', 
      '~/plugins/dayjs.js'
    ]
  };
  


  