import initMixin from './init'

function MyVue(options){
  this.$options = options
  this._init(options)
}

// init
initMixin(MyVue)

export default MyVue