## Popover  

简介：气泡卡片。

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/popover?index=4&subIndex=4 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/popover?index=4&subIndex=4 "官网链接")

---

## 使用

```js
<o-popover 
  show={this.popoverShow} 
  target={this.popoverTarget} 
  direction={this.direction} 
  onClose={this.onClose}>
    <div>测试内容....</div>
    <div>测试内容</div>
    <div>测试内容测试内容</div>
</o-popover>
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show  | bool |   --    |           |
| target  | dom element |   --    |     环绕的目标      |
| direction  | string |    --   |    环绕的方向       |
| onClose  | function |   --    |           |
| children  | json array |   --    |           |

---

## 样例

![popover](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/popover.png "popover")

