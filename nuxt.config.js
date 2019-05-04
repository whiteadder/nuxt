import pkg from "./package";
const bodyParser = require("body-parser");
export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Teste Titulo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "My cool web blog" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["~assets/styles/main.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: process.env.BASE_URL || "https://nuxt-blog-a36a5.firebaseio.com",
    credentials: false
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || "https://nuxt-blog-a36a5.firebaseio.com",
    fbAPIKey: "AIzaSyCZQyqWW4RJpdWC0eE5-iyn-IgE5Cq4d5Q"
  },
  transition: {
    name: "fade",
    mode: "out-in"
  },
  serverMiddleware: [bodyParser.json(), "~/api"]
};
