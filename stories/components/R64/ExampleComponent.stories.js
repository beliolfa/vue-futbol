import { storiesOf } from '@storybook/vue'
import { Center } from '@/stories/_decorators'

import ExampleComponent from '@/components/ExampleComponent'

storiesOf('Components | ExampleComponent', module)
  .addDecorator(Center)
  .add('default', () => ({
    components: { ExampleComponent },
    template: '<ExampleComponent  />',
  }))
