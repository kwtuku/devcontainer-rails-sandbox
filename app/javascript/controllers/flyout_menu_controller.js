import { Controller } from "@hotwired/stimulus"
import { enter, leave } from "el-transition"
// https://techracho.bpsinc.jp/hachi8833/2022_10_17/120660

export default class extends Controller {
  static targets = ["container", "menu"]
  static values = { show: { type: Boolean } }

  toggle() {
    this.showValue = !this.showValue
  }

  hideOnClickOutside({ target }) {
    if (!this.element.contains(target)) this.showValue = false
  }

  showValueChanged(value) {
    // https://stimulus.hotwired.dev/reference/values#change-callbacks
    // initialize時にも実行される仕様

    if (value === true) {
      this.show()
    } else {
      this.hide()
    }
  }

  show() {
    enter(this.menuTarget)
  }

  hide() {
    leave(this.menuTarget)
  }
}
