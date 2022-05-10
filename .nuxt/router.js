import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c9f135a = () => interopDefault(import('..\\pages\\3DPoster.vue' /* webpackChunkName: "pages/3DPoster" */))
const _ebd4f222 = () => interopDefault(import('..\\pages\\Introduction.vue' /* webpackChunkName: "pages/Introduction" */))
const _294ba0d8 = () => interopDefault(import('..\\pages\\Photography.vue' /* webpackChunkName: "pages/Photography" */))
const _466caaca = () => interopDefault(import('..\\pages\\ShortFilm.vue' /* webpackChunkName: "pages/ShortFilm" */))
const _5a694db3 = () => interopDefault(import('..\\pages\\UnFilPerdu.vue' /* webpackChunkName: "pages/UnFilPerdu" */))
const _3f86ba43 = () => interopDefault(import('..\\pages\\VideoResume.vue' /* webpackChunkName: "pages/VideoResume" */))
const _f63fb826 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4c9f135a,
    name: "3DPoster"
  }, {
    path: "/Introduction",
    component: _ebd4f222,
    name: "Introduction"
  }, {
    path: "/Photography",
    component: _294ba0d8,
    name: "Photography"
  }, {
    path: "/ShortFilm",
    component: _466caaca,
    name: "ShortFilm"
  }, {
    path: "/UnFilPerdu",
    component: _5a694db3,
    name: "UnFilPerdu"
  }, {
    path: "/VideoResume",
    component: _3f86ba43,
    name: "VideoResume"
  }, {
    path: "/",
    component: _f63fb826,
    name: "index"
  }, {
    path: "/video-resume",
    component: _3f86ba43,
    name: "Video Resume"
  }, {
    path: "/short-film",
    component: _466caaca,
    name: "Short Film"
  }, {
    path: "/3d-poster",
    component: _4c9f135a,
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
