import Vuex from 'vuex'
import merge from 'lodash/merge'
import { action } from '@storybook/addon-actions'

const dispatch = (actionName, params) => action('dispatch')({ actionName, params })
export function createStore({ state, sharedState, getters }) {
  const store = new Vuex.Store({
    state: merge(state, sharedState),
    getters,
  })
  store.dispatch = dispatch

  return store
}

export function createNamespacedStore(modulesObj) {
  const modules = Object.assign(
    {},
    ...Object.keys(modulesObj).map(module => ({
      [module]: { namespaced: true, ...modulesObj[module] },
    }))
  )

  const store = new Vuex.Store({ modules })
  store.dispatch = dispatch

  return store
}
