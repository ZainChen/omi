## Dropdown  

简介：下拉框。

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/dropdown?index=5&subIndex=4 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/dropdown?index=5&subIndex=4 "官网链接")

---

## 使用

```js
<o-dropdown selectedIndex={this.selectedIndex}
  show={this.showSelect}
  onToggle={this.onToggle}
  onSelect={this.onSelect}>
  <item value={1}>Item 1</item>
  <item value={2}>Item 2</item>
  <item value={3}>Item 3</item>
</o-dropdown>
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| selectedIndex  | number|       |           |
| show  | bool|   false    |           |
| children  | json array|       |           |
| onToggle  | function|       |           |
| onSelect  | function|       |           |

---

## 样例

![dropdown](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/dropdown.png "dropdown")

