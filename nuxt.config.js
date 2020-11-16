import colors from 'vuetify/es5/util/colors'
const isDev = process.env.NODE_ENV === 'development';
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - mobile-store',
    title: 'mobile-store',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyDntIWEL6DuVX9IeB4rWSi-Wmt4x_v01bM",
      authDomain: "fast-store-2203c.firebaseapp.com",
      databaseURL: "https://fast-store-2203c.firebaseio.com",
      projectId: "fast-store-2203c",
      storageBucket: "fast-store-2203c.appspot.com",
      messagingSenderId: "106372924542",
      appId: "1:106372924542:web:ef9b0283f991204b80042f",
      measurementId: "G-1QWWB3T4PH"
    },
    services: {
      //see:https://firebase.nuxtjs.org/guide/options
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedMutation: 'auth/ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'onAuthStateChangedAction',
          subscribeManually: false
        },
        ssr: true, // default
        emulatorPort: isDev ? 9099 : false,
        emulatorHost: 'http://localhost',
      },
      firestore: {
        memoryOnly: false,
        emulatorPort: isDev ? 8080 : false,
        ssl: isDev || true
      }
    }
  },
  pwa: {
    // disable the modules you don't need
    meta: false,
    icon: false,
    // if you omit a module key form configuration sensible defaults will be applied
    // manifest: false,

    workbox: {
      importScripts: [
        // ...
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: false
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
