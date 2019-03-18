## Step  

简介：工作流或步骤进度。

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/step?index=6&subIndex=5 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/step?index=6&subIndex=5 "官网链接")

---

## 使用

```js
<o-step items={[
    { name: 'Finished', description: 'This is a description.', state: state.DONE },
    { name: 'In Progress', description: 'This is a description.', state: state.DOING },
    { name: 'Waiting', description: 'This is a description.', state: state.TODO }
  ]} />
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| items  | json array |        |           |

---

## 样例

![step](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/step.png "step")

