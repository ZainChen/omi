import { define, WeElement } from 'omi'
import css from './_index.css'

define('my-demo', class extends WeElement {
  install() {
    this.store.myDemo = this
    this.show = false
    this.demo = this.store.demo
  }

  css() {
    return css
  }

  onShow = () => {
    this.show = true
    this.update()
  }

  onClose = () => {
    this.show = false
    this.update()
  }
  
  render() {
    if(!this.demo) return
    return (
      <div class='ctn'>
        { this.show && <iframe style={`height:${window.innerHeight-59}px`} src={this.demo} ></iframe>}

        {!this.show && <div class="switch code" onClick={this.onShow}>
          <img src={require('./code.png')}></img>
        </div>}

        {this.show && <div class="switch close" onClick={this.onClose}>
          <img src={require('./close.png')}></img>
        </div>}
      </div>
    )
  }
})
