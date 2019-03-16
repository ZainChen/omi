webpackJsonp([15],{38:function(n,t){n.exports="## What's Omi \uff1f\n\nOmi (pronounced /\u02c8om\u026a/) is next front end framework base on Web Component. One framework. Mobile & desktop & mini program.\n\n<em> Omi looks really neat!<br> </em>\n\u3000\u3000\u3000\u3000\u2014 [Jason Miller (Creator of Preact)](https://twitter.com/_developit/)\n\n<em> I really like the trend towards \"frameworks\" that:<br><br>\"export default class WeElement extends HTMLElement {..}\"<br> <br>This one, Omi, is from Tencent.</em>       \n\u3000\u3000\u3000\u3000\u2014 [Dion Almaer](https://twitter.com/dalmaer/)\n\n## Add Omi in One Minute\n\nThis page demonstrates using Omi **with no build tooling**:\n\n```html\n<script src=\"https://unpkg.com/omi\"><\/script>\n<script>\n  const { define, WeElement, h, render } = Omi\n\n  define('my-counter', class extends WeElement {\n    install() {\n      this.data.count = 1\n      this.sub = this.sub.bind(this)\n      this.add = this.add.bind(this)\n    }\n\n    sub() {\n      this.data.count--\n      this.update()\n    }\n\n    add() {\n      this.data.count++\n      this.update()\n    }\n\n    render() {\n      return h(\n        'div',\n        null,\n        h(\n          'button',\n          { onClick: this.sub },\n          '-'\n        ),\n        h(\n          'span',\n          null,\n          this.data.count\n        ),\n        h(\n          'button',\n          { onClick: this.add },\n          '+'\n        )\n      )\n    }\n  })\n\n  render(h('my-counter'), 'body')\n<\/script>\n```\n\nYou can also use `like-button` tag directly in HTML\uff1a\n\n```jsx\n<body>\n  <my-counter></my-counter>\n</body>\n```\n\n- [Online Demo!](https://tencent.github.io/omi/assets/omi.html)\n\nThe HTML structure is written in hyperscript and JS is written in ES5. You can use JSX and ES2015 + instead.\n\n\n```jsx {8-11}\nimport { render, WeElement, define } from 'omi'\n\ndefine('my-counter', class extends WeElement {\n  data = {\n    count: 1\n  }\n\n  static css = `\n    span{\n        color: red;\n    }`\n\n  sub = () => {\n    this.data.count--\n    this.update()\n  }\n\n  add = () => {\n    this.data.count++\n    this.update()\n  }\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.sub}>-</button>\n        <span>{this.data.count}</span>\n        <button onClick={this.add}>+</button>\n      </div>\n    )\n  }\n})\n\nrender(<my-counter />, 'body')\n```\n\nLooking at the highlighted part above, you can style the components. For example, the scope of the span above is only within the components, and it does not pollute other components. So far you have successfully started Omi! You learned:\n\n* Add ** structure ** for components, such as JSX writing structure above\n* Add ** behavior ** to the component, such as the `onClick'binding event above\n* Add ** style ** to the component, such as `static css'above`\n* Rendering components to body, of course, can also render components to any other component\n\n\n\nCongratulations!"}});
//# sourceMappingURL=15.d0046e65.chunk.js.map