const resource = '/api/my/placeholder'

export default $axios => ({
  list() {
    return $axios.$get(`${resource}`)
  },

  get(id) {
    return $axios.$get(`${resource}/${id}`)
  },

  create(data) {
    return $axios.$post(`${resource}`, data)
  },

  update(id, data) {
    return $axios.$update(`${resource}/${id}`, data)
  },
})
