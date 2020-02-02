import { storiesOf } from '@storybook/vue'
import { Padding } from '@/stories/_decorators'

storiesOf('Components | R64.Tabs', module)
  .addDecorator(Padding)
  .add('default', () => ({
    template: `
    <R64Tabs>
      <R64Tab name="Tab 1">
        Tab 1 content
      </R64Tab>
      <R64Tab name="Tab 2">
        Tab 2 content
      </R64Tab>
    </R64Tabs>`,
  }))
