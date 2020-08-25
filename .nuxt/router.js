import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _282df2f0 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _084b2625 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _0151e6e3 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _64caeaba = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _76f6da69 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _1c5f1933 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _97366420 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _282df2f0,
    children: [{
      path: "/",
      component: _084b2625,
      name: "home"
    }, {
      path: "/login",
      component: _0151e6e3,
      name: "login"
    }, {
      path: "/register",
      component: _0151e6e3,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _64caeaba,
      name: "profile"
    }, {
      path: "/settings",
      component: _76f6da69,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _1c5f1933,
      name: "editor"
    }, {
      path: "/article/:slug?",
      component: _97366420,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
