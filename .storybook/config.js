import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'

import { configure } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import '@/assets/css/tailwind.css'

require('../plugins/globals')

Vue.use(Vuex)
Vue.use(Vuelidate)

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

Vue.prototype.$auth = {
  login(credentials) {
    action('$auth login')(credentials)
    return Promise.resolve()
  },
  logout() {
    action('$auth')('logout')
  },
}

Vue.prototype.$axios = {
  post(url, params) {
    action('$axios post')({ url, params })
    return Promise.resolve()
  },
}

Vue.prototype.$api = {
  signup: {
    register(params) {
      action('$api.signup.register')(params)
      return Promise.resolve()
    },
  },
}

Vue.prototype.$router = {
  push(route) {
    action('navigated to')(route)
  },
}

Vue.prototype.$route = {
  params: {},
}

Vue.prototype.$stripe = {
  import() {
    return window['Stripe'] && window['Stripe'](process.env.VUE_APP_STRIPE_KEY)
  },
}

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
