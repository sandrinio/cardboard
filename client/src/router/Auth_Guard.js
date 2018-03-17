import store  from '../store/store'

export default (to, from, next) => {
  if(store.state.user){
    next()
  }else {
    next('/login')
  }
}
