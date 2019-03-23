webpackJsonp([22],{39:function(s,n){s.exports="## Class\n\nOmi has two built-in class methods `extractClass` and `classNames`.\n\n```js\nimport { classNames, extractClass } from 'omi'\n\ndefine('my-element', class extends WeElement {\n  render(props) {\n    //extractClass will take out this class/className from props and merge the other classNames to obj\n    const cls = extractClass(props, 'o-my-class', {\n      'other-class': true,\n      'other-class-b': this.xxx === 1\n    })\n\n    return (\n      <div {...cls} {...props}>\n        Test\n      </div>\n    )\n  }\n})\n  \n```\n\nThe `classNames` is the same as [classnames](https://github.com/JedWatson/classnames) of [npm](https://www.npmjs.com/package/classnames)."}});
//# sourceMappingURL=22.ebe12282.chunk.js.map