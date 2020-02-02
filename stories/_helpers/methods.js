import { action } from '@storybook/addon-actions'

export const log = (event, payload) => action(event)(payload)
