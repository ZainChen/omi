webpackJsonp([71],{105:function(t,n){t.exports="## Tree\n\nMany things can be represented in a tree structure, such as directories, organizational hierarchies, taxonomy, and so on. The tree component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select tree nodes in the tree.\n\n## Usage\n\n```html\n<m-tree id='myTree' checkbox node=\"{\n\ttitle: 'p-0',\n\tid: 1,\n\ticon: 'account_balance_wallet',\n\tchildren: [\n\t\t{\n\t\t\ttitle: 'p-1',\n\t\t\tid: 2,\n\t\t\ticon: 'assignment_ind',\n\t\t\tchildren: [\n\t\t\t\t{ title: 'p-2', id: 3, icon: 'chrome_reader_mode', checked: true },\n\t\t\t\t{ title: 'p-2.5', id: 13, icon: 'chrome_reader_mode' }\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\ttitle: 'p-4',\n\t\t\tid: 4,\n\t\t\ticon: 'extension',\n\n\t\t\tchildren: [\n\t\t\t\t{\n\t\t\t\t\ttitle: 'p-5', id: 5, selected: true, icon: 'dashboard', checked: true,\n\t\t\t\t\tdisabled: true\n\t\t\t\t},\n\t\t\t\t{ title: '\u9879\u76ee\u516d', id: 6, icon: 'favorite' },\n\t\t\t\t{ title: '\u9879\u76ee7', id: 7 }\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\ttitle: 'p-11',\n\t\t\tid: 14,\n\t\t\ticon: 'group_work',\n\t\t\tchildren: [\n\t\t\t\t{\n\t\t\t\t\ttitle: 'p-12', id: 12, icon: 'fingerprint', checked: true\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\">\n</m-tree>\n```\n\n## Javascript\n\n```js\nvar myTree = document.querySelector('#myTree')\n\nmyTree.addEventListener('check', (evt) => {\n\tconsole.log(evt.detail)\n})\n\n\nmyTree.addEventListener('toggle', (evt) => {\n\tconsole.log(evt.detail)\n})\n\nmyTree.addEventListener('nodeclick', (evt) => {\n\tconsole.log(evt.detail)\n})\n```\n\nGet the node data:\n\n```js\nconsole.log(myTree.props.node)\n```\n\n## API\n\n### Props\n\n```jsx\n{\n\tnode: obj,\n\tcheckbox: boolean\n}\n```\n\n### Event\n\n```jsx\n{\n\ttoggle: function, \n\tnodeclick: function,\n\tcheck: function\n}\n```\n"}});
//# sourceMappingURL=71.32a15529.chunk.js.map