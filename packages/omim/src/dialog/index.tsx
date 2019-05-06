import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
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

  installed() {
    
  }

  render(props) {
    return (
      <div {...extractClass(props, 'mdc-dialog', {
        'mdc-dialog--open': props.show
      })}>
        <div class='mdc-dialog__scrim'></div>
        <div class='mdc-dialog__container'>
          <div class='mdc-dialog__surface'>
            <h2 class='mdc-dialog__title'>Phone ringtone</h2>
              <section class='mdc-dialog__content'>
                fdsafsda
              </section>
              <footer class='mdc-dialog__actions'>
                {(props.cancelButton) && <m-button class='m-button__margin-right' ripple {...props.cancelButton}>{props.cancelButton.text}</m-button>}
                {(props.confirmButton) && <m-button ripple {...props.confirmButton}>{props.confirmButton.text}</m-button>}
              </footer>
          </div>
        </div>
      </div>
    )
  }
}
