export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Boa Post Production',
    titleTemplate: '%s | Boa Post Production',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/futura.css',
    '~/assets/css/body.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-block-reveal.client.js',
    '~plugins/vue-js-modal.js',
    '~plugins/vimeo-player.client.js'

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/pwa',
  ],
  optimizedImages: {
    optimizeImages: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@blokwise/dynamic',
    ['nuxt-gmaps', {
      key: 'AIzaSyA_O3rJlpg0169rZD-tDlm7j5U0j3ik5X4',
      //you can use libraries: ['places']
    }]
    
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'maincolor': '#762b8b',
            'sari':'#e7d434',
            'yesil':'#20ad8f'
          },
          margin: {
            '72':'18rem',
            '-72': '-18rem',
            '-80':'-20rem',
            '80':'20rem'
           }
        }
      },
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon:{
      fileName: 'iconv2.png'
    },
    manifest: {
      lang: 'tr'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    VIMEO_TOKEN: process.env.NUXT_ENV_VIMEO_TOKEN
  },
}
