import ApiDefine from './ApiDefine'

const components = [
  ApiDefine
]

const install = function (Vue, opt) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ApiDefine
}
