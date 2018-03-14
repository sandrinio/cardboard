import axios from 'axios'
import Api from './Api'

export default {
  newProduct (product) {
    return Api().post(`${product.id}/new-product`, product)
  },
  newCompany (company){
    return Api().post('newCompany', company)
  },
  getCompanyList (){
    return Api().get('getCompanyList')
  },
  deleteCompany (company) {
    return Api().post('deleteCompany', company)
  },
  getProduct (id) {
    return Api().get(`getProduct/${id}`)
  },
  getCompany (id) {
    return Api().get(`getCompany/${id}`)
  },
  changeProduct (data, id) {
    return Api().post(`changeProduct/${id}`, data)
  }
  // changeProduct (data, id) {
  //   return Api().post(`changeProduct/id`, data)
  // }
}
