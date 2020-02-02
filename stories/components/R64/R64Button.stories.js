import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { Center } from '@/stories/_decorators'

import R64Button from '@/components/R64/R64Button'

storiesOf('Components | R64.Button', module)
  .addDecorator(Center)
  .add('default', () => ({
    methods: {
      submit() {
        action('emit click')(null)
      },
    },
    components: { R64Button },
    template: `
      <div>
      <R64Button @click="submit" class="m-4">Default</R64Button>
      <R64Button disabled @click="submit" class="m-4">Default disabled</R64Button>
      <R64Button busy @click="submit" class="m-4">Default busy</R64Button>
      <R64Button small @click="submit" class="m-4">Default Small</R64Button>
      <R64Button full @click="submit" class="m-4">Default Full</R64Button>
      <R64Button full outline @click="submit" class="m-4">Default Full Outline</R64Button>
      <R64Button outline @click="submit" class="m-4">Default Outline</R64Button>
      <R64Button outline small @click="submit" class="m-4">Default Outline</R64Button>
      </div>
    `,
  }))
  .add('primary', () => ({
    methods: {
      submit() {
        action('emit click')(null)
      },
    },
    components: { R64Button },
    template: `
      <div>
        <R64Button primary @click="submit" class="m-4">Primary</R64Button>
        <R64Button primary disabled @click="submit" class="m-4">Primary disabled</R64Button>
        <R64Button primary busy @click="submit" class="m-4">Primary busy</R64Button>
        <R64Button primary small @click="submit" class="m-4">Primary Small</R64Button>
        <R64Button primary full @click="submit" class="m-4">Primary Full</R64Button>
        <R64Button primary full outline @click="submit" class="m-4">Primary Full Outline</R64Button>
        <R64Button primary outline @click="submit" class="m-4">Primary Outline</R64Button>
        <R64Button primary outline small @click="submit" class="m-4">Primary Outline</R64Button>
      </div>
    `,
  }))
  .add('success', () => ({
    methods: {
      submit() {
        action('emit click')(null)
      },
    },
    components: { R64Button },
    template: `
      <div>
        <R64Button success @click="submit" class="m-4">Success</R64Button>
        <R64Button success disabled @click="submit" class="m-4">Success disabled</R64Button>
        <R64Button success busy @click="submit" class="m-4">Success busy</R64Button>
        <R64Button success small @click="submit" class="m-4">Success Small</R64Button>
        <R64Button success full @click="submit" class="m-4">Success Full</R64Button>
        <R64Button success full outline @click="submit" class="m-4">Success Full Outline</R64Button>
        <R64Button success outline @click="submit" class="m-4">Success Outline</R64Button>
        <R64Button success outline small @click="submit" class="m-4">Success Outline</R64Button>
      </div>
    `,
  }))
  .add('danger', () => ({
    methods: {
      submit() {
        action('emit click')(null)
      },
    },
    components: { R64Button },
    template: `
      <div>
      <R64Button danger @click="submit" class="m-4">Danger</R64Button>
      <R64Button danger disabled @click="submit" class="m-4">Danger disabled</R64Button>
      <R64Button danger busy @click="submit" class="m-4">Danger busy</R64Button>
      <R64Button danger small @click="submit" class="m-4">Danger Small</R64Button>
      <R64Button danger full @click="submit" class="m-4">Danger Full</R64Button>
      <R64Button danger full outline @click="submit" class="m-4">Danger Full Outline</R64Button>
      <R64Button danger outline @click="submit" class="m-4">Danger Outline</R64Button>
      <R64Button danger outline small @click="submit" class="m-4">Danger Outline</R64Button>
      </div>
    `,
  }))
