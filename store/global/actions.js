import { SET_ERROR } from './mutation-types'

export default {
  setError({ commit }, error) {
    commit(SET_ERROR, error)
  },
}
