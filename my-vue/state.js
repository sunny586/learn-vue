export function initState(vm) {
  const opts = vm.$options
  if (opts.data) {
    initData(vm)
  }
}

function initData(vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ?
    data.call(vm, vm) :
    data || {}

  const keys = Object.keys(data)
  const props = vm.$options.props
  const methods = vm.$options.methods
  let i = keys.length
  while (i--) {
    const key = keys[i]
    if (methods && hasOwn(methods, key)) {
      console.warn(
        `Method "${key}" has already been defined as a data property.`,
        vm
      )
    } else if (props && hasOwn(props, key)) {
      console.warn(
        `The data property "${key}" is already declared as a prop. ` +
        `Use prop default value instead.`,
        vm
      )
    } else {
      proxy(vm, `_data`, key)
    }
  }
}

function hasOwn(obj, key) {
  return obj.hasOwnProperty(key)
}


export function proxy(target, sourceKey, key) {
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get: function proxyGetter() {
      return this[sourceKey][key]
    },
    set: function proxySetter(val) {
      this[sourceKey][key] = val
    }
  })
}


