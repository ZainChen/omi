# Omim

[Omi](https://github.com/Tencent/omi) 打造的 Material Design 框架无关标准组件，任意框架都可以使用。

![](https://tencent.github.io/omi/packages/omim/assets/pv4.jpeg?a=1)

## 特性

* 使用标准 Web Components 的 Custom Elements 渲染 
* 任意框架都可以使用这些组件(比如 Omi, React, Vue and Angular)
* 同时支持 JSX 和 原生 HTML 标签的使用方式 
* 每个组件可以单独使用
* 超级容易更换主题颜色、字体和圆角

## 使用指南

### 通过 script

```html
<script src="https://unpkg.com/omi"></script>
<script src="https://unpkg.com/@omim/core@latest/button/index.js"></script>

<m-button>I am button</m-button>
```

### 通过 npm

``` bash
npm install @omim/core
```

Then:

```js
import '@omim/core/button'
```

然后在任意框架中使用，比如 Omi, React, Vue or Angular:

``` html
<m-button>I am button</m-button>
```

It can also be used in pure js:

```js
var button = document.createElement('m-button')
button.innerHTML = 'I am button'
document.body.append(button)
button.addEventListener('click', function () {
  console.log('Clicked!')
})

//or
//document.body.innerHTML = '<m-button>I am button</m-button>'
```

## 更改主题颜色

```js
window.OmimThemePrimary =  'red'
window.OmimThemeSecondary =  'blue'
window.OmimThemeError =  'yellow'

import '@omim/core/button'
```

或者

```html
<m-button>I am button</m-button>

<script src="https://unpkg.com/omi"></script>
<script>
  window.OmimThemePrimary =  'red'
  window.OmimThemeSecondary =  'blue'
  window.OmimThemeError =  'yellow'
</script>
<script src="https://unpkg.com/@omim/core@latest/button/index.js"></script>
```

[→ 点击查看更多配置](https://github.com/Tencent/omi/blob/master/packages/omim/src/theme.ts)

## 贡献

### 一些命令

Build 组件:

```bash
npm run build -- component-name
```

Build 所有组件:

```bash
npm run build-all
```

Build 例子:

```bash
npm start demo-name
```

发布:

```bash
npm publish --access public
```

## 相关链接

* [material.io docs](https://material.io/develop/web/components/buttons/) 
* [material.io demo](https://material-components.github.io/material-components-web-catalog/#/) 
* [material-theme-builder](https://material-theme-builder.glitch.me/)
* [material-components-web](https://github.com/material-components/material-components-web)