## PathProgress 

简介：使用 SVG 展示一个任务的进度。

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/path-progress?index=6&subIndex=4 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/path-progress?index=6&subIndex=4 "官网链接")

---

## 使用

```js
<o-path-progress
  type='Circle' 
  progress={0.5}
  text={'test'}
  options={options}
  initialAnimate={true}
  containerStyle={{
    width: '200px',
    height: '200px'
  }}
  containerClassName={'.progressbar'}
></o-path-progress>
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| type         | string|    -   |   支持 Circle,Line 和 SemiCircle     |
| progress         | number|    0   |             |
| text         | string|    -   |             |
| options         | json |       |             |
| initialAnimate         | bool|       |             |
| containerStyle         | json|       |             |
| containerClassName         | string|       |             |

---

## 样例

![path-progress](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/path-progress.png "path-progress")

