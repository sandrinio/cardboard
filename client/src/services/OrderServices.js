import axios from 'axios'
import Api from './Api'

export default {
  newOrder (data) {
    return Api().post('new-order', data)
  },
  ordersGetter () {
    return Api().get('ordersGetter')
  },
  orderGetter (id) {
    return Api().get(`orderGetter/${id}`)
  },
  editOrder (data) {
    return Api().post(`editOrder`, data)
  },
  deleteOrder (data){
    return Api().post('deleteOrder', data)
  }
}
