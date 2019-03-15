webpackJsonp([7],{46:function(n,i){n.exports='## \u5b89\u88c5  \n\n\u76f4\u63a5\u4e0b\u8f7d\u5e76\u7528 `<script>` \u6807\u7b7e\u5f15\u5165\uff0cOmi \u4f1a\u88ab\u6ce8\u518c\u4e3a\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u3002\n\n* [Omi \u5f00\u53d1\u7248\u672c](https://unpkg.com/omi@latest/dist/omi.js)\n* [Omi \u538b\u7f29\u7248\u672c](https://unpkg.com/omi@latest/dist/omi.min.js)\n\n\u4e5f\u53ef\u4ee5\u901a\u8fc7 npm \u5b89\u88c5\n\n```bash\nnpm i omi\n```\n\n\u5982\u679c\u9700\u8981\u517c\u5bb9 IE8+\uff0c\u53ef\u4ee5\u9009\u62e9 omio\uff0c\u5b83\u62e5\u6709\u548c omi \u51e0\u4e4e\u4e00\u6837\u7684 API\uff0c\u4e14 Omi \u4e5f\u4f1a\u88ab\u6ce8\u518c\u4e3a\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u3002\n\n* [Omio \u5f00\u53d1\u7248\u672c](https://unpkg.com/omio@latest/dist/omi.js)\n* [Omio \u538b\u7f29\u7248\u672c](https://unpkg.com/omi@latest/dist/omi.min.js)\n\n\u6216\u8005\n\n```bash\nnpm i omio\n```\n\n## \u547d\u4ee4\u884c\u5de5\u5177\n\nOmi \u63d0\u4f9b\u4e86\u5b98\u65b9\u7684 CLI\uff0c\u4f60\u4e0d\u9700\u8981\u53bb\u5b66\u4e60\u600e\u4e48\u914d\u7f6e webpack\u3001babel\u6216\u8005 TypeScript\uff0cCLI \u5e2e\u4f60\u914d\u7f6e\u597d\u4e86\u4e00\u5207\uff0c\u4e14\u63d0\u4f9b\u4e86\u5404\u79cd\u6a21\u677f\u6ee1\u8db3\u4e0d\u540c\u7684\u9879\u76ee\u7c7b\u578b\u3002\n\n```bash\n$ npm i omi-cli -g     # install cli\n$ omi init my-app      # init project\n$ cd my-app            \n$ npm start            # develop\n$ npm run build        # release\n```\n\n> `npx omi-cli init my-app` \u4e5f\u662f\u652f\u6301\u7684(npm v5.2.0+).\n\n\u76ee\u5f55\u63cf\u8ff0:\n\n```\n\u251c\u2500 config\n\u251c\u2500 public\n\u251c\u2500 scripts\n\u251c\u2500 src\n\u2502  \u251c\u2500 assets\n\u2502  \u251c\u2500 elements    //Store all custom elements\n\u2502  \u251c\u2500 store       //Store all this store of pages\n\u2502  \u251c\u2500 admin.js    //Entry js of compiler\uff0cwill build to admin.html\n\u2502  \u2514\u2500 index.js    //Entry js of compiler\uff0cwill build to index.html\n```\n\n\n### npm \u811a\u672c\n\n```json\n"scripts": {\n    "start": "node scripts/start.js",\n    "build": "PUBLIC_URL=. node scripts/build.js",\n    "build-windows": "set PUBLIC_URL=.&& node scripts/build.js",\n    "fix": "eslint src --fix"\n}\n```\n\n\u4f60\u4e5f\u53ef\u4ee5\u8bbe\u7f6e PUBLIC_URL, \u6bd4\u5982\uff1a\n\n```json\n...\n"build": "PUBLIC_URL=https://your.url.com/sub node scripts/build.js",\n"build-windows": "set PUBLIC_URL=https://your.url.com/sub&& node scripts/build.js",\n...\n```\n\n### \u5207\u6362 omi \u548c omio\n\n\u589e\u52a0\u6216\u5220\u9664 package.json \u91cc\u7684 alias config \u53ef\u4ee5\u5207\u6362 omi \u548c omio \u6e32\u67d3:\n\n```js\n ...\n "alias": {\n    "omi": "omio"\n  }\n  ...\n```\n    \n\n## \u9879\u76ee\u6a21\u677f\n\n| **Template Type**|  **Command**|  **Describe**|\n| ------------ |  -----------|  ----------------- |\n|\u57fa\u7840\u6a21\u677f(v3.3.0+)|`omi init my-app`| \u57fa\u7840\u6a21\u677f\uff0c\u652f\u6301 omi \u548c omio(IE8+)|\n|\u5c0f\u7a0b\u5e8f\u6a21\u677f(v3.3.5+)|`omi init-p my-app`| Omi \u5f00\u53d1\u5c0f\u7a0b\u5e8f |\n|\u652f\u6301\u9884\u6e32\u67d3\u5feb\u7167\u9aa8\u67b6\u7684\u6a21\u677f|`omi init-snap my-app`| \u57fa\u7840\u6a21\u677f\uff0c\u652f\u6301 omi \u548c omio(IE8+)\uff0c\u5185\u7f6e\u9884\u6e32\u67d3|\n|TypeScript \u6a21\u677f(omi-cli v3.3.0+)|`omi init-ts my-app`|\u4f7f\u7528 TypeScript \u7684\u6a21\u677f|\n|Mobile \u6a21\u677f|`omi init-weui my-app`| \u4f7f\u7528 weui \u548c omi-router \u7684\u6a21\u677f|\n|omi-mp \u6a21\u677f(omi-cli v3.0.13+)|`omi init-mp my-app`  |\u4f7f\u7528\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1 H5|\n|MVVM \u6a21\u677f(omi-cli v3.0.22+)|`omi init-mvvm my-app`  |MVVM \u6a21\u677f|\n\nCli \u81ea\u52a8\u521b\u5efa\u7684\u9879\u76ee\u811a\u624b\u67b6\u662f\u57fa\u4e8e\u5355\u9875\u7684 create-react-app \u6539\u9020\u6210\u591a\u9875\u7684\uff0c\u6709\u914d\u7f6e\u65b9\u9762\u7684\u95ee\u9898\u53ef\u4ee5\u67e5\u770b [create-react-app \u7528\u6237\u6307\u5357](https://facebook.github.io/create-react-app/docs/getting-started)\u3002'}});
//# sourceMappingURL=7.bd71420a.chunk.js.map