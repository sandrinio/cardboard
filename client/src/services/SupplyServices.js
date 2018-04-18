import Api from './Api'


export default {
  addPaper (data) {
    return Api().post('/addPaper', data)
  },
  paperGetter (){
    return Api().get('/paperGetter')
  },
  addGlue (data) {
    return Api().post('/addGlue', data)
  },
  glueGetter () {
    return Api().get('/glueGetter')
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
