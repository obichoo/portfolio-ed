export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["assets/global.css", "assets/fonts.css", "assets/breakpoints.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/VueCheckView.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["assets/*.scss"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    extendRoutes(routes, resolve) {
      return [
        ...routes,
        {
          name: "Video Resume",
          path: "/video-resume",
          component: resolve(__dirname, "pages/VideoResume.vue"),
        },
        {
          name: "Short Film",
          path: "/short-film",
          component: resolve(__dirname, "pages/ShortFilm.vue"),
        },
        {
          name: "3D Poster",
          path: "/3d-poster",
          component: resolve(__dirname, "pages/3DPoster.vue"),
        },
      ];
    },
  },
};
