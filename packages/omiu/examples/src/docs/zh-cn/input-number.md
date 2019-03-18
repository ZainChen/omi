## InputNumber 

简介：可以调整的数字输入框。

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/input-number?index=5&subIndex=1 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/input-number?index=5&subIndex=1 "官网链接")

---

## 使用

```js
<o-input-number
  onChange={this.onInputNumberChange}
  min={1}
  max={10}
  step={1}
  value={2}
  label="描述文字"
/>
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| min  | number|--  ||
| max  | number| -- |  |
| step | number   |    | |
| value | number| -- ||
| label | string| -- ||
| onChange | function| -- ||

---

## 样例

![input-number](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/input-number.png "input-number")

