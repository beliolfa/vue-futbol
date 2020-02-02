import { storiesOf } from '@storybook/vue'
import { log } from '@/stories/_helpers/methods'
import { Center } from '@/stories/_decorators'

import R64RadioButton from '@/components/R64/R64RadioButton'

storiesOf('Components | R64.Radio', module)
  .addDecorator(Center)
  .add('unchecked', () => ({
    methods: { log },
    components: { R64RadioButton },
    template: `<R64RadioButton
                  label="The label"
                  value="1"
                  radioValue="0"
                  name="radio"
                  @input="log('input', $event)"
                />`,
  }))
  .add('checked', () => ({
    methods: { log },
    components: { R64RadioButton },
    template: `<R64RadioButton
                  label="The label"
                  value="1"
                  radioValue="1"
                  name="radio"
                  @input="log('input', $event)"
                />`,
  }))
