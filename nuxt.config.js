module.export = {
  mode: 'universal',

  server: {
    host: 'frontend.boilerplate.test',
  },

  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Orbitron:400,500,600,700,800,900&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // '@/assets/css/components/alert.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/api', '~/plugins/axios', '~/plugins/globals', '~/plugins/vuelidate'],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
    '@nuxtjs/svg',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            withCredentials: true,
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json',
            },
          },
          user: {
            url: '/api/user',
            method: 'get',
            propertyName: false,
            withCredentials: true,
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json',
            },
          },
        },
        tokenRequired: false,
        tokenType: false,
      },
    },
  },
  proxy: {
    '/api': {
      target: `${process.env.VUE_APP_BASE_URL}/api`,
      pathRewrite: {
        '^/api': '',
      },
      secure: false,
    },
  },
  router: {
    middleware: [],
  },
}
