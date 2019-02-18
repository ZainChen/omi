webpackJsonp([2],{107:function(n,e){n.exports="## Table  \n\n\u8868\u683c\u7684\u5f62\u5f0f\u5c55\u73b0\u548c\u5904\u7406\u6570\u636e\u3002\n\n## \u4f7f\u7528\n\n```js\ndefine('my-app', class extends WeElement {\n  dataSource = [{\n    id: 1,\n    name: 'xwang',\n    age: 18,\n    address: '\u817e\u8baf\u5927\u53a6'\n  }, {\n    id: 2,\n    name: 'dntzhang',\n    age: 12,\n    address: '\u6ee8\u6d77\u5927\u53a6'\n  }, {\n    id: 3,\n    name: 'dntzhang2',\n    age: 12,\n    address: '\u6ee8\u6d77\u5927\u53a6'\n  }, {\n    id: 4,\n    name: 'dntzhang3',\n    age: 12,\n    address: '\u6ee8\u6d77\u5927\u53a6'\n  }, {\n    id: 5,\n    name: 'dntzhang4',\n    age: 12,\n    address: '\u6ee8\u6d77\u5927\u53a6'\n  }]\n\n  columns = [{\n    title: '\u59d3\u540d',\n    key: 'name',\n  }, {\n    title: '\u5e74\u9f84',\n    key: 'age',\n  }, {\n    title: '\u4f4f\u5740',\n    key: 'address',\n  }, {\n    title: '\u64cd\u4f5c',\n    render: (item) => (\n      <span>\n        <a href=\"javascript:;\" onClick={e => { this.removeItem(item) }}>Delete</a>\n      </span>\n    )\n  }]\n\n  removeItem = (item) => {\n    this.table.removeItem(item)\n  }\n\n  render() {\n    return (\n      <o-table \n        ref={e => { this.table = e }} \n        dataSource={this.dataSource} \n        columns={this.columns}>\n      </o-table>\n    )\n  }\n})\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| dataSource  | json array |   --    |           |\n| columns  | json array |   --    |           |"}});
//# sourceMappingURL=2.73d36413.chunk.js.map