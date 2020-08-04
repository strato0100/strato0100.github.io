import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c8b537b = () => interopDefault(import('../pages/blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _1e81740f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blank-page",
    component: _6c8b537b,
    name: "blank-page___en"
  }, {
    path: "/de",
    component: _1e81740f,
    name: "index___de"
  }, {
    path: "/es",
    component: _1e81740f,
    name: "index___es"
  }, {
    path: "/de/blank-page",
    component: _6c8b537b,
    name: "blank-page___de"
  }, {
    path: "/es/blank-page",
    component: _6c8b537b,
    name: "blank-page___es"
  }, {
    path: "/",
    component: _1e81740f,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
