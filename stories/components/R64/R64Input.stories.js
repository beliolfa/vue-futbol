import { storiesOf } from '@storybook/vue'
import { Center } from '@/stories/_decorators'

import R64FormInput from '@/components/R64/R64FormInput'

storiesOf('Components | R64.Input', module)
  .addDecorator(Center)
  .add('default', () => ({
    components: { R64FormInput },
    template: '<R64FormInput />',
  }))
  .add('with label', () => ({
    components: { R64FormInput },
    template: '<R64FormInput label="This is a label" />',
  }))
  .add('with placeholder', () => ({
    components: { R64FormInput },
    template: '<R64FormInput placeholder="This is a placeholder" />',
  }))
  .add('with error', () => ({
    components: { R64FormInput },
    data() {
      return {
        validator: {
          $error: true,
          $touch: () => {},
        },
      }
    },
    mounted() {
      this.$refs.input.onInput()
    },
    template:
      '<R64FormInput ref="input" error-message="This is an error message" :validator="validator" value="wrong thing" />',
  }))
