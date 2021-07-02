import axios from 'axios'

// DEFAULT REQUEST
// We can some lib for better log readability like https://www.npmjs.com/package/axios-debug-log
// Log all request calls
axios.interceptors.request.use(request => {
  // Should hide sensitive info
  console.log('Starting Request', JSON.stringify(request, null, 2))
  return request
})
// Log all response
axios.interceptors.response.use(response => {
  // Should hide sensitive info
  console.log('Response:', JSON.stringify(response, null, 2))
  return response
})

export default axios