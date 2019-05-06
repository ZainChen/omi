import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
import { MDCDialogAdapter } from '@material/dialog'
import '../icon'
import '../button'

interface Props {
  show: boolean,
  title: string,
  msg: string,
  cancelButton: object,
  confirmButton: object
}

interface Data {

}

@tag('m-dialog')
export default class Dialog extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    show: Boolean,
    title: String,
    msg: String,
    cancelButton: Object,
    confirmButton: Object
  }
  
  showDialog = true
  
  
  
  installed() {
    
  }

  
  
  
  onClose = (e) => {
    this.showDialog = false
    this.update()
    this.showDialog = true
  }

  render(props) {
    return (
      <div id='confirmation-dialog' {...extractClass(props, 'mdc-dialog', {
        // 'mdc-dialog--opening': this.showDialog && props.show,
        // 'mdc-dialog--closing': this.showDialog && props.show,
        'mdc-dialog--open': this.showDialog && props.show
      })}>
        <div class='mdc-dialog__scrim' onClick={this.onClose}></div>
        <div class='mdc-dialog__container'>
          <div class='mdc-dialog__surface'>
            {(props.title) && <h2 class='mdc-dialog__title'>{props.title}</h2>}
            <section class='mdc-dialog__content'>
              fd<br/>fd<br/>fd<br/>fd<br/>fd<br/>fd<br/>fd<br/>fd<br/>fd<br/>fd<br/>fd<br/>
            </section>
            <footer class='mdc-dialog__actions'>
              {(props.cancelButton) && <m-button ripple {...props.cancelButton}>{props.cancelButton.text}</m-button>}
              {(props.confirmButton) && <m-button ripple {...props.confirmButton}>{props.confirmButton.text}</m-button>}
            </footer>
          </div>
        </div>
      </div>
    )
  }
}
