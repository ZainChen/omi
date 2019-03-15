webpackJsonp([9],{44:function(n,t){n.exports="## What's Store?\n\nStore is Omi's built-in centralized data warehouse, which solves and provides the following problems and capabilities:\n\n* Component Tree Data Sharing\n* Data Change Updates Dependent Components on Demand\n\n![](https://github.com/Tencent/omi/raw/master/assets/store.jpg)\n\n## A piece of code is completely ready for Store\n\n```jsx\nimport { render, WeElement, define } from '../../src/omi'\n\ndefine('my-counter', class extends WeElement {\n  static use = [\n    { count: 'count' }\n  ]\n\n  add = () => this.store.add()\n  sub = () => this.store.sub()\n\n  addIfOdd = () => {\n    if (this.use.count % 2 !== 0) {\n      this.store.add()\n    }\n  }\n\n  addAsync = () => {\n    setTimeout(() => this.store.add(), 1000)\n  }\n\n  render() {\n    return (\n      <p>\n        Clicked: {this.use.count} times\n        {' '}\n        <button onClick={this.add}>+</button>\n        {' '}\n        <button onClick={this.sub}>-</button>\n        {' '}\n        <button onClick={this.addIfOdd}>\n          Add if odd\n        </button>\n        {' '}\n        <button onClick={this.addAsync}>\n          Add async\n        </button>\n      </p>\n    )\n  }\n})\n\nrender(<my-counter />, 'body', {\n  data: {\n    count: 0\n  },\n  sub() {\n    this.data.count--\n  },\n  add() {\n    this.data.count++\n  },\n})\n```\n\n* Declare a dependent path by `static use'.\n* `store` injects all components from the root node through the third parameter of render.\n\nHere is a complicated example of `use'.\n\nData of store:\n\n```json\n{\n  count: 0,\n  arr: ['china', 'tencent'],\n  motto: 'I love omi.',\n  userInfo: {\n    firstName: 'dnt',\n    lastName: 'zhang',\n    age: 18\n  }\n}\n```\n\nStatic use:\n\n```jsx\nstatic use = [\n  'count', //Direct string, accessible through this.use[0] \n  'arr[0]', //It also supports path, which is accessible through this.use[1]\n  //Support JSON\n  {\n    //Alias, accessible through this.use.reverseMotto\n    reverseMotto: [\n      'motto', //path\n      target => target.split('').reverse().join('')  //computed\n    ]\n  },\n  { name: 'arr[1]' }, //{ alias: path }\uff0caccessible through this.use.name\n  {\n    //alias\uff0caccessible through this.use.fullName\n    fullName: [\n      ['userInfo.firstName', 'userInfo.lastName'], //path array\n      (firstName, lastName) => firstName + lastName //computed\n    ]\n  },\n]\n```\n\nLet's look at the use of JSX:\n\n```jsx\n...\n...\nrender() {\n  return (\n    <div>\n      <button onClick={this.sub}>-</button>\n      <span>{this.use[0]}</span>\n      <button onClick={this.add}>+</button>\n      <div>\n        <span>{this.use[1]}</span>\n        <button onClick={this.rename}>rename</button>\n      </div>\n      <div>{this.use.reverseMotto}</div><button onClick={this.changeMotto}>change motto</button>\n      <div>{this.use.name}</div>\n      <div>{this.use[3]}</div>\n      <div>\n        {this.use.fullName}\n        <button onClick={this.changeFirstName}>change first name</button>\n      </div>\n    </div>\n  )\n}\n...\n...\n```\n\nWithout alias, you can also access it directly through `this.store.data.xxx'."}});
//# sourceMappingURL=9.228535ac.chunk.js.map