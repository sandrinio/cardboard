import Api from './Api'


export default {
  addPaper (data) {
    return Api().post('/addPaper', data)
  },
  addGlue (data) {
    return Api().post('/addGlue', data)
  },
  addDye (data) {
    return Api().post('/addDye', data)
  },
  addStarch (data) {
    return Api().post('/addStarch', data)
  },
  addWrapper (data) {
    return Api().post('/addWrappers', data)
  }
}
