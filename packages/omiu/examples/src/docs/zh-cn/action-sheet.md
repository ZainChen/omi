## ActionSheet 

简介：弹出式选择组件。

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/action-sheet?index=4&subIndex=0 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/action-sheet?index=4&subIndex=0 "官网链接")

---

## 使用

```js
<o-action-sheet
  menus={[{
      label: 'Option 1',
      onClick: () => { }
    }, {
      label: 'Option 2',
      onClick: () => { }
  }]}
  actions={[
      {
        label: 'Cancel',
        onClick: this.hide
      }
  ]}
  show={true}
  type="ios"
  onClose={e => { }}
/>
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| menus  | json array|--  ||
| actions  | json array| -- ||
| scale | number   |   2 | |
| show | bool| false ||
| type | string| ios | options: ios, android|
| onClose | function| -- ||

---

## 样例

![action-sheet](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/action-sheet.png "action-sheet")

