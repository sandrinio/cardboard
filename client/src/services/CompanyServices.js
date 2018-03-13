import axios from 'axios'
import Api from './Api'

export default {
  newProduct (product) {
    return Api().post(`${product.id}/new-product`, product)
  },
  newCompany (company){
    return Api().post('newCompany', company)
  },
  companyGetter (){
    return Api().get('companyGetter')
  },
  deleteCompany (company) {
    return Api().post('deleteCompany', company)
  },
  getCompany (id) {
    return Api().get('/getCompany', id)
  }
}
