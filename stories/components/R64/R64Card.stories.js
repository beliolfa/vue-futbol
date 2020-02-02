import { storiesOf } from '@storybook/vue'
import { Center } from '@/stories/_decorators'

import R64Card from '@/components/R64/R64Card'

storiesOf('Components | R64.Card', module)
  .addDecorator(Center)
  .add('without title', () => ({
    components: { R64Card },
    template: '<R64Card> This is the content slot </R64Card>',
  }))
  .add('with title', () => ({
    components: { R64Card },
    template: '<R64Card title="This is the Title"> This is the content slot </R64Card>',
  }))
  .add('with title and footer', () => ({
    components: { R64Card },
    template:
      '<R64Card title="This is the Title"> This is the content slot <span slot="footer">This is the footer</span></R64Card>',
  }))
  .add('small', () => ({
    components: { R64Card },
    template: '<R64Card small title="This is the Title"> This is the content slot </R64Card>',
  }))
  .add('medium', () => ({
    components: { R64Card },
    template: '<R64Card medium title="This is the Title"> This is the content slot </R64Card>',
  }))
  .add('large', () => ({
    components: { R64Card },
    template: '<R64Card large title="This is the Title"> This is the content slot </R64Card>',
  }))
  .add('full', () => ({
    components: { R64Card },
    template: '<R64Card full title="This is the Title"> This is the content slot </R64Card>',
  }))
