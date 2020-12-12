export default function({ $axios, store }) {
  $axios.defaults.withCredentials = true

  $axios.onRequest(() => {
    store.dispatch('global/setError', null)
  })
  $axios.onError(error => {
    if (
      error.response.status !== 401 ||
      (error.response.status === 401 && error.response.data.error !== 'Token expired')
    ) {
      store.dispatch('global/setError', error.response.data.error)
    }
  })
}
