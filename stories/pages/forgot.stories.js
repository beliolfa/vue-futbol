import { storiesOf } from '@storybook/vue'
import { createStore } from '@/stories/_helpers/store'
import { Center } from '@/stories/_decorators'

import Forgot from '@/pages/forgot'

const errorStore = createStore({
  state: {
    global: {
      error: 'This is an error',
    },
  },
})

const successStore = createStore({
  state: {
    global: {
      error: '',
    },
  },
})

storiesOf('Pages | Forgot Password', module)
  .addDecorator(Center)
  .add('without error', () => ({
    components: { Forgot },
    template: '<Forgot />',
    store: successStore,
  }))
  .add('with error', () => ({
    components: { Forgot },
    template: '<Forgot />',
    store: errorStore,
  }))
