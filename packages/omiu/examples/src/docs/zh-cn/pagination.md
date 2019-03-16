## Pagination 

简介：分页组件.

组件链接：[简体中文](https://tencent.github.io/omi/packages/omiu/examples/build/zh-cn.html#/pagination?index=3&subIndex=0 "官网链接") | [English](https://tencent.github.io/omi/packages/omiu/examples/build/index.html#/pagination?index=3&subIndex=0 "官网链接")

---

## 使用

```js
<o-pagination
  total={25}
  currentPage={1}
  pageSize={5}
  onChange={this.onChange}
/>
```

---

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| :------------- |:-------------|:-----|:-------------|
| total         | number|    --       |          |
| currentPage  | number          |   0 |           |
| pageSize | number            | 10   |        |
| numDisplay | number| 5 ||
| numEdge | number| 3 ||
| ellipseText | string| ... ||

---

## 样例

![pagination](https://raw.githubusercontent.com/ZainChen/omi-vscode/master/assets/omiu/pagination.png "pagination")

