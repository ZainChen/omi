webpackJsonp([2],{51:function(n,e){n.exports="\n## Props\n\n\u901a\u8fc7 Props \u5411\u5b50\u7ec4\u4ef6\u4f20\u9012\u6570\u636e\uff0c\u6bd4\u5982\uff1a\n\n```jsx\nimport { WeElement, define, render } from 'omi'\n\ndefine('my-element', class extends WeElement {\n  render(props) {\n    return (\n      <h1>Hello, {props.name}!</h1>\n    )\n  }\n})\n```\n\n\u4f7f\u7528\u5143\u7d20:\n\n```jsx\n<my-element name=\"world\"></my-first-element>\n```\n\n\u4f60\u4e5f\u53ef\u4ee5\u4f20\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\u7ed9 props:\n\n```jsx\ndefine('my-element', class extends WeElement {\n  render(props) {\n    return (\n      <h1>Hello, {props.myObj.name}!</h1>\n    )\n  }\n})\n```\n\n\u4f7f\u7528\u5143\u7d20:\n\n```jsx\n<my-first-element myObj={{ name: 'world' }}></my-first-element>\n```\n\n\u4f60\u53ef\u4ee5\u901a\u8fc7\u9759\u6001\u5c5e\u6027 `static defaultProps` \u6765\u8bbe\u7f6e\u9ed8\u8ba4\u503c:\n\n```jsx\ndefine('my-first-element', class extends WeElement {\n  static defaultProps = {\n\t\tname: 'Omi',\n\t\tmyAge: 18\n\t}\n\n  render(props) {\n    return (\n      <h1>Hello, {props.name}! Age {props.myAge}</h1>\n    )\n  }\n})\n```"}});
//# sourceMappingURL=2.382461dd.chunk.js.map