import { storiesOf } from '@storybook/vue'
import { createStore } from '@/stories/_helpers/store'

import Login from '@/pages/login'

const successStore = createStore({
  state: {
    global: {
      error: '',
    },
  },
})

const errorStore = createStore({
  state: {
    global: {
      error: 'Wrong Credentials!',
    },
  },
})

storiesOf('Pages | Login', module)
  .add('with no errors', () => ({
    components: { Login },
    template: '<Login />',
    store: successStore,
  }))
  .add('with errors', () => ({
    components: { Login },
    template: '<Login />',
    store: errorStore,
  }))
