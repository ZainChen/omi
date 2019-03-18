## Toast 

简介：简单的提醒通知。

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/toast?index=4&subIndex=1 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/toast?index=4&subIndex=1 "官网链接")

---

## 使用

```js
<o-toast type='success' show={true}>支付成功</o-toast>
<o-toast type='loading' show={false}>加载中</o-toast>
```

你也可以使用命令的方式：

```js
import toast from 'omiu/toast'

//显示
toast.showLoading()
//隐藏
toast.hideLoading()
//支持自定义文字
toast.showLoading('请求中...')
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| show  | bool | false  ||
| type  | string | -- |Options: loading, success|

---

## 样例

![toast](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/toast.png "toast")

