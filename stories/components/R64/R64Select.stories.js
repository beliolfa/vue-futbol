import { storiesOf } from '@storybook/vue'
import { log } from '@/stories/_helpers/methods'
import { Center } from '@/stories/_decorators'

import R64FormSelect from '@/components/R64/R64FormSelect'

const options = [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]

storiesOf('Components | R64.Select', module)
  .addDecorator(Center)
  .add('default', () => ({
    data: () => ({ options }),
    methods: { log },
    components: { R64FormSelect },
    template: `<R64FormSelect
                  :options="options"
                  @change="log('change', $event)"
                />`,
  }))
  .add('with label', () => ({
    data: () => ({ options }),
    methods: { log },
    components: { R64FormSelect },
    template: `<R64FormSelect
                  label="This is a label"
                  :options="options"
                  @change="log('change', $event)"
                />`,
  }))
  .add('with placeholder', () => ({
    data: () => ({ options }),
    methods: { log },
    components: { R64FormSelect },
    template: `<R64FormSelect
                  placeholder="This is a placeholder"
                  :options="options"
                  @change="log('change', $event)"
                />`,
  }))
  .add('with error', () => ({
    data: () => ({ options }),
    methods: { log },
    components: { R64FormSelect },
    template: `<R64FormSelect
                  error
                  error-text="This is an error"
                  :options="options"
                  @change="log('change', $event)"
                />`,
  }))
  .add('disabled', () => ({
    data: () => ({ options }),
    methods: { log },
    components: { R64FormSelect },
    template: `<R64FormSelect
                  disabled
                  placeholder="Placeholder"
                  :options="options"
                  @change="log('change', $event)"
                />`,
  }))
