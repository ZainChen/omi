import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  show: boolean,
  title: string,
  msg: string,
  cancelText: string,
  confirmText: string
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
    cancelText: String,
    confirmText: String
  }

  installed() {
    
  }

  render(props) {
    return (
      <div {...extractClass(props, 'mdc-dialog', {
        'mdc-dialog--open': props.show
      })}>
        <div class='mdc-dialog__container'>
          <div class='mdc-dialog__surface'>
            <h2 class='mdc-dialog__title'>Phone ringtone</h2>
            <div class='mdc-dialog__content'>
              <section class='mdc-dialog__content'>
                fdsafsda
              </section>
              <footer class='mdc-dialog__actions'></footer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
