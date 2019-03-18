## DropdownMenu 

简介：下拉菜单。

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/dropdown-menu?index=3&subIndex=4 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/dropdown-menu?index=3&subIndex=4 "官网链接")

---

## 使用

```js
<o-dropdown-menu>
  <item icon={{ path: path.pathA, color: '#F2F2F2' }} text='Chat'></item>
  <item icon={{ path: path.pathB, color: '#F2F2F2' }} text='Add Friend'></item>
  <item icon={{ path: path.pathC, color: '#F2F2F2' }} text='Scan'></item>
  <item icon={{ path: path.pathD, color: '#F2F2F2' }} text='Pay'></item>
</o-dropdown-menu>
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------|
| children         | json array|    --       |  数组项的结构: `<item icon={{ path: 'path string', color: 'any color string' }} text='any text string'></item>`    |　

---

## 样例

![dropdown-menu](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/dropdown-menu.png "dropdown-menu")

