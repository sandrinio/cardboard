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
  dyeGetter () {
    return Api().get('/dyeGetter')
  },
  addStarch (data) {
    return Api().post('/addStarch', data)
  },
  starchGetter () {
    return Api().get('/starchGetter')
  },
  addWrapper (data) {
    return Api().post('/addWrappers', data)
  },
  wrapGetter () {
    return Api().get('/wrapGetter')
  },
}
