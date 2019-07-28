import MyVue from '../my-vue'

const vm = new MyVue({
  data(){
    return {
      test: 'hello MyVue'
    }
  }
})



console.log(vm, 'hahaha22....')

vm.test2 = 'aaaa'

console.log(vm, 'hahaha333....')

