import { storiesOf } from '@storybook/vue'
import { Center } from '@/stories/_decorators'

import Index from '@/pages/index'

storiesOf('Pages | Index', module)
  .addDecorator(Center)
  .add('default', () => ({
    components: { Index },
    template: '<Index />',
  }))
