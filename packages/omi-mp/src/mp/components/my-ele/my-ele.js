import '../my-child/my-child'
import componentCss from './my-ele.wxss'
import { h, WeElement, rpx } from 'omi'
import { setData } from '../../../utils/set-data'

  // components/my-ele/my-ele.js
const mpOption = function () {
  return ({
  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type: String,
      value: '',
    },
    age:{
      type: Number,
      value: 18
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    myMethods: function() {
      this.triggerEvent('myevent', { name: 'dntzhang' })
    }
  }
})

}
class Element extends WeElement {
  static props = mpOption().properties

  data = mpOption().data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install = function() {
    this.properties = this.props
    Object.assign(this.data, JSON.parse(JSON.stringify(this.props)))
    this._mpOption = mpOption()
    this._mpOption.created && this._mpOption.created.call(this)
    Object.keys(this._mpOption.methods).forEach(key => {
      if(typeof this._mpOption.methods[key] === 'function'){
        this[key] = this._mpOption.methods[key].bind(this)
      }
    })
  }

  uninstall = mpOption().detached || function() {}

  installed = function() {
    this._mpOption.attached && this._mpOption.attached.call(this)
    this._mpOption.ready && this._mpOption.ready.call(this)
  }

  adoptedCallback = mpOption().moved || function() {}

  triggerEvent = function(name, data) {
    this.fire(name, data)
  }

  setData = setData
}

function css() {
  return rpx(componentCss)
}

function render() {
  const { name, age } = this.data;
  return h("div", null, [
    h("button", { ontap: this.myMethods }, [
      `Click me will log dntzhang to the console panel`
    ]),
    h("div", null, [`props - name:${name}, age:${age}`]),
    h("my-child", null, [])
  ]);
}


customElements.define('my-ele', Element)
          