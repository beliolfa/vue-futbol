// import signupApi from '@/api/signup'

export default function(ctx, inject) {
  const repositories = {
    // signup: signupApi($axios),
  }

  inject('api', repositories)
}
