## Dialog  

简介：对话框。

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/dialog?index=4&subIndex=3 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/dialog?index=4&subIndex=3 "官网链接")

---

## 使用

```js
<o-dialog
  onClose={this.closePopup}
  onConfirm={this.onConfirm}
  show={this.popupShow}
  type='confirm'
  title='My Title'
  msg='My Msg!'
  cancelText='cancel'
  confirmText='confirm'
/>
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| type  | string |   alert    | Options: alert, confirm  |
| show  | bool |   --    |           |
| title  | string |   --    |           |
| msg  | string |    --   |           |
| cancelText  | string |   --    |           |
| confirmText  | string |   --    |           |
| onClose  |function |    --   |           |
| onConfirm  | function |    --   |           |

---

## 样例

![dialog](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/dialog.png "dialog")

