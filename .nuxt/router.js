import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0cce816a = () => interopDefault(import('..\\pages\\3DPoster.vue' /* webpackChunkName: "pages/3DPoster" */))
const _7a4093e7 = () => interopDefault(import('..\\pages\\Introduction.vue' /* webpackChunkName: "pages/Introduction" */))
const _418f14e0 = () => interopDefault(import('..\\pages\\Photography.vue' /* webpackChunkName: "pages/Photography" */))
const _8c2afeba = () => interopDefault(import('..\\pages\\ShortFilm.vue' /* webpackChunkName: "pages/ShortFilm" */))
const _216338ab = () => interopDefault(import('..\\pages\\UnFilPerdu.vue' /* webpackChunkName: "pages/UnFilPerdu" */))
const _57ca2e4b = () => interopDefault(import('..\\pages\\VideoResume.vue' /* webpackChunkName: "pages/VideoResume" */))
const _21ad3df5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/3DPoster",
    component: _0cce816a,
    name: "3DPoster"
  }, {
    path: "/Introduction",
    component: _7a4093e7,
    name: "Introduction"
  }, {
    path: "/Photography",
    component: _418f14e0,
    name: "Photography"
  }, {
    path: "/ShortFilm",
    component: _8c2afeba,
    name: "ShortFilm"
  }, {
    path: "/UnFilPerdu",
    component: _216338ab,
    name: "UnFilPerdu"
  }, {
    path: "/VideoResume",
    component: _57ca2e4b,
    name: "VideoResume"
  }, {
    path: "/",
    component: _21ad3df5,
    name: "index"
  }, {
    path: "/video-resume",
    component: _57ca2e4b,
    name: "Video Resume"
  }, {
    path: "/short-film",
    component: _8c2afeba,
    name: "Short Film"
  }, {
    path: "/3d-poster",
    component: _0cce816a,
    name: "3D Poster"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
