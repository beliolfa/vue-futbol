import { storiesOf } from '@storybook/vue'
import { Center } from '@/stories/_decorators'

import R64Checkbox from '@/components/R64/R64Checkbox'

storiesOf('Components | R64.Checkbox', module)
  .addDecorator(Center)
  .add('unchecked', () => ({
    components: { R64Checkbox },
    template: '<R64Checkbox label="Check this" :value="false" />',
  }))
  .add('checked', () => ({
    components: { R64Checkbox },
    template: '<R64Checkbox label="Uncheck this" :value="true" />',
  }))
  .add('disabled', () => ({
    components: { R64Checkbox },
    template: '<R64Checkbox label="Uncheck this" :value="true" disabled />',
  }))
