// import '../../src/button/index.tsx'
import '../../src/dialog/index.tsx'
import { render, WeElement, define, h } from 'omi'

define('my-app', class extends WeElement {

  alertShow = false
  simpleShow = false

  onShowAlert = (e) => {
    this.alertShow = true
    this.update()
  }

  onShowSimple = (e) => {
    this.simpleShow = true
    this.update()
  }
  
  onClose = (e) => {
    this.simpleShow = false
    this.alertShow = false
    this.update()
  }

  onConfirm = (e) => {
    this.simpleShow = false
    this.alertShow = false
    this.update()
  }

  
  render(props, data) {
    return(
      <div>
        <m-button onClick={this.onShowAlert} ripple>Alert</m-button>
        <m-button onClick={this.onShowSimple} ripple>Simple</m-button>
        <m-button onClick={null} ripple>Confirmation</m-button>
        <m-button onClick={null} ripple>Scrollable</m-button>
        <m-dialog
          show={this.alertShow}
          scrimClose
          message="Discard draft?"
          cancelButton={{
            text: 'Cancel',
            onClick: this.onClose
          }}
          confirmButton={{
            text: 'Discard',
            onClick: this.onConfirm
          }}
        />
        <m-dialog
          show={this.simpleShow}
          scrimClose
          title='Select an account'
          message="Add account"
          cancelButton={{
            text: 'Cancel',
            onClick: this.onClose
          }}
          confirmButton={{
            text: 'Discard',
            onClick: this.onConfirm
          }}
        />

      </div>
    )
  }
})

render(<my-app />, 'body')
