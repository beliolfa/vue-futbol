import { storiesOf } from '@storybook/vue'
import { Center } from '@/stories/_decorators'

import R64Alert from '@/components/R64/R64Alert'

storiesOf('Components | R64.Alert', module)
  .addDecorator(Center)
  .add('visible with error', () => ({
    components: { R64Alert },
    template: '<R64Alert type="error" :visible="true" message="This is an error" />',
  }))
  .add('visible with success', () => ({
    components: { R64Alert },
    template: '<R64Alert type="success" :visible="true" message="This is a success message" />',
  }))
  .add('visible false', () => ({
    components: { R64Alert },
    template: '<R64Alert type="success" :visible="false" message="This is a success message" />',
  }))
