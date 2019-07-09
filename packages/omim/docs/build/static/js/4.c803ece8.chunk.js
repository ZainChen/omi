webpackJsonp([4],{172:function(n,o){n.exports='## Top App Bar\n\nTop App Bar\u5145\u5f53\u5e94\u7528\u7a0b\u5e8f\u6807\u9898\uff0c\u5bfc\u822a\u56fe\u6807\u548c\u64cd\u4f5c\u9879\u7b49\u9879\u76ee\u7684\u5bb9\u5668\u3002\n\n## \u4f7f\u7528\n\n\u65b9\u6cd51\uff1a\n\n```html\n<m-top-app-bar adjust dense fixed\n  heading=\'Omim\'\n  navigations="[\'favorite\']"\n  action-items="[{text: \'Omim\'}, \'favorite_border\', \'favorite_border\']"\n></m-top-app-bar>\n```\n\n\u65b9\u6cd52 (\u5bfc\u822a\u6309\u94ae\u81ea\u5b9a\u4e49\u4efb\u610f\u5143\u7d20)\uff1a\n\n```html\n<m-top-app-bar\n  heading=\'Click to view all menus\'\n  adjust>\n  <navigation>\n    <m-avatar icon="person" background-color=\'#FFF\' color=\'#0072d9\' />\n  </navigation>\n  <actionitem>\n    <m-badge css="..." content="99">\n      <m-icon path="..." color="#FFF" />\n    </m-badge>\n  </actionitem>\n  <div style=\'width:100%\'>\n    <m-tab css={`.mdc-tab-bar {background: #EEE;}`} default-active=\'speed\' align="end" stacked>\n      <item label="Recents" value="speed" icon="access_time"></item>\n      <item label="Nearby" value="fire" icon="near_me"></item>\n      <item label="Favorites" value="lol" icon="favorite"></item>\n    </m-tab>\n  </div>\n</m-top-app-bar>\n```\n\n## Omi \u4e2d\u4f7f\u7528\n\nJSX:\n\n\u65b9\u6cd51\uff1a\n\n```jsx\n<m-top-app-bar adjust dense fixed\n  heading=\'Omim\'\n  navigations={[\'favorite\']}\n  action-items={[{text: \'Omim\'}, \'favorite_border\', \'favorite_border\']}\n  onNavigation={this.onMenu}\n  onAction={this.onMenu}\n/>\n```\n\n\u65b9\u6cd52 (\u5bfc\u822a\u6309\u94ae\u81ea\u5b9a\u4e49\u4efb\u610f\u5143\u7d20)\uff1a\n\n```jsx\n<m-top-app-bar\n  heading={\'Click to show menus\' + this.titleOmi}\n  scroll-target={this.scrollTarget}\n  onNavigation={this.onDemoStart}\n  onAction={this.onMenuStart}>\n  <navigation>\n    <m-avatar icon="person" backgroundColor=\'#FFF\' color={this.themeColor} />\n  </navigation>\n  <actionitem>\n    <m-badge css={`...`} content="99">\n      <m-icon path="..." color="#FFF" />\n    </m-badge>\n  </actionitem>\n</m-top-app-bar>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| heading | string | -- | \u6807\u9898\u5185\u5bb9 |\n| short | boolean | -- | \u5e26\u6709\u7f29\u77ed\u52a8\u52a8\u753b |\n| shortCollapsed | boolean | -- | \u56fa\u5b9a\u4e3a\u7f29\u77ed\u72b6\u6001 |\n| prominent | boolean | -- | \u7a81\u51fa\u663e\u793a\u6807\u9898 |\n| dense | boolean | -- | \u66f4\u7d27\u51d1\u7684\u9876\u90e8\u5e94\u7528\u680f |\n| fixed | boolean | -- | \u56fa\u5b9a\u9876\u90e8\u5e94\u7528\u680f |\n| adjust | boolean | -- | \u81ea\u52a8\u586b\u5145\u9876\u90e8\u5e94\u7528\u680f\u9ad8\u5ea6 |\n| bottom | boolean | -- | \u5e95\u90e8\u5e94\u7528\u680f |\n| navigations | object | -- | \u5de6\u4fa7\u5bfc\u822a\u6309\u94ae |\n| actionItems | object | -- | \u53f3\u4fa7\u6309\u94ae |\n| scrollTarget | EventTarget | window | \u8bbe\u7f6e\u76ee\u6807\u6eda\u52a8\u6761(JSX \u4f7f\u7528) |\n| scrollTargetId | string | window | \u8bbe\u7f6e\u76ee\u6807\u6eda\u52a8\u6761(\u539f\u751f js \u4f7f\u7528) |\n| onNavigation | function | -- | \u5355\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u89e6\u53d1 |\n| onAction | function | -- | \u5355\u51fb\u53f3\u4fa7\u6309\u94ae\u89e6\u53d1 |\n'}});
//# sourceMappingURL=4.c803ece8.chunk.js.map