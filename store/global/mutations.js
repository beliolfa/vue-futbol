import { SET_ERROR } from './mutation-types'

export default {
  [SET_ERROR](state, error) {
    state.error = error
  },
}
