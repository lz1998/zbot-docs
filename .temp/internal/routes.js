/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\87554\\AppData\\Roaming\\npm\\node_modules\\vuepress\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-8751a5ac",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-8751a5ac").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-21ddc7e4",
    path: "/guide/cubepic.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-21ddc7e4").then(next)
    },
  },
  {
    name: "v-2952dc86",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2952dc86").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-70244f38",
    path: "/guide/cuber.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-70244f38").then(next)
    },
  },
  {
    name: "v-94a672f8",
    path: "/guide/express.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-94a672f8").then(next)
    },
  },
  {
    name: "v-c4c8bab8",
    path: "/guide/admin.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c4c8bab8").then(next)
    },
  },
  {
    name: "v-401050c4",
    path: "/guide/picture.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-401050c4").then(next)
    },
  },
  {
    name: "v-db4b4bd0",
    path: "/appendices/botml.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-db4b4bd0").then(next)
    },
  },
  {
    name: "v-f3f077e0",
    path: "/guide/scramble.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f3f077e0").then(next)
    },
  },
  {
    name: "v-11078874",
    path: "/guide/repeat.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-11078874").then(next)
    },
  },
  {
    name: "v-cdf1b178",
    path: "/guide/learn.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-cdf1b178").then(next)
    },
  },
  {
    name: "v-ec409ae8",
    path: "/guide/comp.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ec409ae8").then(next)
    },
  },
  {
    name: "v-0f9092fc",
    path: "/guide/switch.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0f9092fc").then(next)
    },
  },
  {
    name: "v-4625b2e4",
    path: "/guide/wca.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4625b2e4").then(next)
    },
  },
  {
    name: "v-b46de778",
    path: "/guide/welcome.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b46de778").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]