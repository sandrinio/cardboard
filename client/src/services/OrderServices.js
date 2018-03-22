import axios from 'axios'
import Api from './Api'

export default {
  newOrder (data) {
    return Api().post('new-order', data)
  },
  ordersGetter () {
    return Api().get('ordersGetter')
  }
}
