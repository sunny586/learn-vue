import { initState } from './state'

export default function init(MyVue) {
  MyVue.prototype._init = function (options) {
    const vm = this
    initState(vm)
  }
}