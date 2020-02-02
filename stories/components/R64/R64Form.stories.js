import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { Center } from '@/stories/_decorators'

import R64Form from '@/components/R64/R64Form'

storiesOf('Components | R64.Form', module)
  .addDecorator(Center)
  .add('enabled', () => ({
    methods: {
      submit() {
        action('submitted')(null)
      },
    },
    components: { R64Form },
    template: '<R64Form :submit="submit"> This is the content slot </R64Form>',
  }))
  .add('disabled', () => ({
    methods: {
      submit() {
        action('submitted')(null)
      },
    },
    components: { R64Form },
    template: '<R64Form  :submit="submit" disabled> This is the content slot </R64Form>',
  }))
  .add('busy', () => ({
    methods: {
      submit() {
        action('submitted')(null)
      },
    },
    components: { R64Form },
    template: '<R64Form  :submit="submit" busy> This is the content slot </R64Form>',
  }))
  .add('with submit text', () => ({
    methods: {
      submit() {
        action('submitted')(null)
      },
    },
    components: { R64Form },
    template: '<R64Form  :submit="submit" submitText="Play"> This is the content slot </R64Form>',
  }))
