## Rate 

简介：评分。

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/rate?index=5&subIndex=7 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/rate?index=5&subIndex=7 "官网链接")

---

## 使用

```js
<o-rate 
  total={5} 
  value={this.valueA} 
  color='#07C160' 
  onSelect={this.onSelect} />
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------|
| total         |   number  |    --   |      总的星星个数       |　
| value         |    number  |    --   |   支持小数打半星          |　
| color         |   string  |    --   |             |　
| onSelect         |    function  |    --   |             |　

---

## 样例

![rate](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/rate.png "rate")

