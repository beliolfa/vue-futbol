import { storiesOf } from '@storybook/vue'
import { createStore } from '@/stories/_helpers/store'

import Signup from '@/pages/signup'

const sharedState = {
  global: {
    signupForm: {
      first_name: 'Jeffrey',
      last_name: 'Way',
      email: 'jeffrey@laracast.com',
    },
  },
}

const store = createStore({
  sharedState,
  state: {
    global: {
      error: '',
    },
  },
})

const storeWithError = createStore({
  sharedState,
  state: {
    global: {
      error: 'Blocking error',
    },
  },
})

storiesOf('Pages | Signup', module)
  .add('without error', () => ({
    components: { Signup },
    template: '<Signup />',
    store,
  }))
  .add('with error', () => ({
    components: { Signup },
    template: '<Signup />',
    store: storeWithError,
  }))
