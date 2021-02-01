import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0db34e9c = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _06e9065e = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _d5c73492 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _ce7eb712 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _1093fb15 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _01e474df = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _7f8ae7c4 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _0db34e9c,
    children: [{
      path: "",
      component: _06e9065e,
      name: "home"
    }, {
      path: "/login",
      component: _d5c73492,
      name: "login"
    }, {
      path: "/register",
      component: _d5c73492,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _ce7eb712,
      name: "profile"
    }, {
      path: "/settings",
      component: _1093fb15,
      name: "settings"
    }, {
      path: "/editor",
      component: _01e474df,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _7f8ae7c4,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
