import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000/',
    // baseURL: 'http://46.101.238.60/',
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
