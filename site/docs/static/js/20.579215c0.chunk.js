webpackJsonp([20],{48:function(e,n){e.exports="\n## Props\n\nTransfer data to sub elements through props, such as:\n\n```jsx\nimport { WeElement, define, render } from 'omi'\n\ndefine('my-element', class extends WeElement {\n  render(props) {\n    return (\n      <h1>Hello, {props.name}!</h1>\n    )\n  }\n})\n```\n\nUsing element:\n\n```jsx\n<my-element name=\"world\"></my-element>\n```\n\nYou can also pass any type of data to props:\n\n```jsx\ndefine('my-element', class extends WeElement {\n  render(props) {\n    return (\n      <h1>Hello, {props.myObj.name}!</h1>\n    )\n  }\n})\n```\n\nUsing element:\n\n```jsx\n<my-element myObj={{ name: 'world' }}></my-element>\n```\n\nYou can set the default value by the `static defaultProps` property\uff0cuse `static propTypes` to set the type:\n\n```jsx\ndefine('my-element', class extends WeElement {\n  static defaultProps = {\n\t\tname: 'Omi',\n\t\tmyAge: 18\n\t}\n\n  static propTypes = {\n\t\tname: String,\n\t\tmyAge: Number\n  }\n  \n  render(props) {\n    return (\n      <h1>Hello, {props.name}! Age {props.myAge}</h1>\n    )\n  }\n})\n```\n\nSpecial attention should be paid to adding `static propTypes` if your custom elements want to be used directly in other frameworks or without frameworks. For example, it can be used directly in the body:\n\n```html\n<body>\n  <my-element name=\"dntzhang\" my-age=\"20\"></my-element>\n</body>\n```"}});
//# sourceMappingURL=20.579215c0.chunk.js.map