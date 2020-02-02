import { storiesOf } from '@storybook/vue'
import { Center } from '@/stories/_decorators'

import R64StripeInput from '@/components/R64/R64StripeInput'

storiesOf('Components | R64.Stripe Input', module)
  .addDecorator(Center)
  .add('default', () => ({
    components: { R64StripeInput },
    template: '<R64StripeInput class="w-full" />',
  }))
  .add('with label', () => ({
    components: { R64StripeInput },
    template: '<R64StripeInput label="Different label" class="w-full" />',
  }))
