import { storiesOf } from '@storybook/vue'
import { Padding } from '@/stories/_decorators'

storiesOf('Components | R64.Dropdown', module)
  .addDecorator(Padding)
  .add('closed', () => ({
    template: `
    <R64Dropdown>
    <template #header>
      Dropdown Header
    </template>
    <div>
      Dropdown Content
    </div>
  </664Dropdown>`,
  }))
  .add('opened', () => ({
    template: `
    <R64Dropdown is-opened>
    <template #header>
      Dropdown Header
    </template>
    <div>
      Dropdown Content
    </div>
  </664Dropdown>`,
  }))
