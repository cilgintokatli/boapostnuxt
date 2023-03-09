export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Boa Post Production",
    titleTemplate: "%s | Boa Post Production",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      { hid: "twitter:site", name: "twitter:site", content: "@boapostpro" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://boapost.com"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Boa Post Production"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: ""
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://boapost.com/_nuxt/img/d0d0581-1000.jpg"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Boa Post Production"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://boapost.com"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Boa Post Production"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: ""
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://boapost.com/_nuxt/img/d0d0581-1000.jpg"
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://boapost.com/_nuxt/img/d0d0581-1000.jpg"
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Boa Post Production"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/futura.css", "~/assets/css/body.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vue-block-reveal.client.js",
    "~plugins/vue-js-modal.js",
    "~plugins/vimeo-player.client.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@aceforth/nuxt-optimized-images",
    "@nuxtjs/pwa"
  ],
  optimizedImages: {
    optimizeImages: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@blokwise/dynamic",
    [
      "nuxt-gmaps",
      {
        key: process.env.NUXT_ENV_GMAP_TOKEN
        //you can use libraries: ['places']
      }
    ],
    "@nuxtjs/sitemap"
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            maincolor: "#762b8b",
            sari: "#e7d434",
            yesil: "#20ad8f"
          },
          margin: {
            "72": "18rem",
            "-72": "-18rem",
            "-80": "-20rem",
            "80": "20rem"
          }
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: "iconv2.png"
    },
    manifest: {
      lang: "tr"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    VIMEO_TOKEN: process.env.NUXT_ENV_VIMEO_TOKEN
  }
};
