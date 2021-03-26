export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    // console.log('Inject access token')
  })

  $axios.onError(error => {
    console.log(error.response)
    console.log(error.status)
  })
}
