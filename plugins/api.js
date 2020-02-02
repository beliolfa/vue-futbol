// import signupApi from '@/api/signup'

export default function({ $axios }, inject) {
  const repositories = {
    // signup: signupApi($axios),
  }

  inject('api', repositories)
}
