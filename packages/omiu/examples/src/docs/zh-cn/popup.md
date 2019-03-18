## Popup  

简介：弹出层。

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/popup?index=4&subIndex=2 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/popup?index=4&subIndex=2 "官网链接")

---

## 使用

```js
<o-popup
  onClose={this.closePopup}
  onConfirm={this.onConfirm}
  show={this.popupShow}  
  title='My Title'
  cancelText='cancel'
  confirmText='confirm'
>
  <div>I am content</div>
  <div>I am content</div>
  <div>I am content</div>
  <div>I am content</div>
</o-popup>
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show  | bool |   --    |           |
| title  | string |   --    |           |
| width  | number |   --    |           |
| cancelText  | string |   --    |           |
| confirmText  | string |   --    |           |
| onClose  |function |    --   |           |
| onConfirm  | function |    --   |           |
| children  | vdom json array |    --   |           |

---

## 样例

![popup](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/popup.png "popup")

