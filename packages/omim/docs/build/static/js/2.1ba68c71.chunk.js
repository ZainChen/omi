webpackJsonp([2],{174:function(n,t){n.exports="## Transition\n\nTransition & Transition Group. \u5f88\u5bb9\u6613\u8fd0\u52a8\u4e00\u4e2a\u6216\u8005\u4e00\u5806 dom \u5143\u7d20\uff0c\u63d0\u4f9b\u4f18\u96c5\u7684\u8fdb\u5165\u6216\u8005\u79bb\u5f00\u8fc7\u6e21\u52a8\u753b\u3002\n\n## Usage\n\n* `<m-transition></m-transition>`\n* `<m-transition-group></m-transition-group>`\n\n## \u6848\u4f8b\n\n```jsx\nimport { define, WeElement, render, h } from 'omi'\nimport 'omim/transition'\nimport 'omim/transition-group'\n\ndefine('my-app', class extends WeElement {\n\n  static css = `\n  .item-leave-to, .item-enter, .item-appear {\n    opacity: 0;\n    transform: translateX(15px);\n  }\n\n  .item-leave-active, .item-enter-active,.item-appear-active {\n    transition: all 500ms ease-in;\n  }`\n\n  _id = 0\n\n  items = [\n    { _id: this._id++, text: 'Learn omi' },\n    { _id: this._id++, text: 'Learn omim' },\n    { _id: this._id++, text: 'Learn transition' },\n    { _id: this._id++, text: 'Learn transition group' },\n  ]\n\n  toggle = () => {\n    this.removed = false\n    this.show = !this.show\n    this.update()\n  }\n\n  onRemoved = () => {\n    this.removed = true\n  }\n\n  show = true\n\n  removed = false\n\n  render() {\n    const items = this.items\n    return (\n      <div style={{ marginTop: '2rem' }}>\n\n        <h1>Transition</h1>\n        <m-transition onRemoved={this.onRemoved} name=\"item\" appear removable removed={this.removed} show={this.show}>\n          <p>Hello transition</p>\n        </m-transition>\n        <br />\n        <button onclick={this.toggle}>\bToggle</button>\n\n        <h1>Transition Group</h1>\n        <ul>\n          <m-transition-group name=\"item\" appear delay={200}>\n            {items.map(({ _id, text }) =>\n              <li key={_id}>\n                <button\n                  onClick={() => {\n                    this.items = items.filter(item => item._id !== _id)\n                    this.update()\n                  }}>\n                  &times;\n                </button> {text}\n              </li>\n            )}\n          </m-transition-group>\n        </ul>\n        <button\n          onClick={() => {\n            const text = prompt('Enter some text');\n            if (text) {\n              this.items.push({ _id: this._id++, text })\n              this.update()\n            }\n          }}\n        >\n          Add Item\n      </button>\n      </div>\n    )\n\n  }\n})\nrender(<my-app />, 'body')\n```\n"}});
//# sourceMappingURL=2.1ba68c71.chunk.js.map