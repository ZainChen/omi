webpackJsonp([27],{99:function(n,t){n.exports='## Icon Button \n\nIcon Button \u5141\u8bb8\u7528\u6237\u53ea\u9700\u70b9\u51fb\u4e00\u6b21\u5c31\u53ef\u4ee5\u8fdb\u884c\u64cd\u4f5c\u548c\u505a\u51fa\u9009\u62e9\u3002\n\n## \u4f7f\u7528\n\n```html\n<m-icon-button color="red" icons="[\'favorite\', \'favorite_border\']"></m-icon-button>\n\n<m-icon-button>\n  <svg viewBox="0 0 24 24" class="" width="2em" height="2em" aria-hidden="true">\n    <path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path>\n  </svg>\n  <svg viewBox="0 0 1024 1024" class="" width="2em" height="2em" aria-hidden="true">\n    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"\n      fill="#F98080"></path>\n    <path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"\n      fill="#F95050"></path>\n  </svg>\n</m-icon-button>\n```\n\n## Omi \u4e2d\u4f7f\u7528\n\nJSX:\n\n```jsx\n<m-icon-button color="red" icons={[\'favorite\', \'favorite_border\']}></m-icon-button>\n```\n\n## \u66f4\u591a\u5b98\u65b9 Icons\n\n\u8bbf\u95ee [Material Icons \u5b98\u65b9\u7f51\u7ad9](https://material.io/tools/icons/?style=baseline) \u83b7\u53d6\u66f4\u591a Icons\u3002\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| ripple | boolean | -- | \u6ce2\u7eb9\u6548\u679c |\n| toggle | object | -- |  |\n| icons | object | -- | \u591a\u4e2a\u56fe\u6807 |\n| icon | string | -- | \u56fe\u6807 |\n| imgs | object | -- | \u56fe\u7247\u8def\u5f84 |\n| svg | object | -- | svg\u56fe\u6807 |\n| color | string | -- | \u989c\u8272 |\n| disabled | boolean | -- | \u4f7f\u56fe\u6807\u6309\u94ae\u5931\u6548 |\n| onChange | function | -- | \u56fe\u6807\u53d8\u5316\u89e6\u53d1 |\n\n* [\u2192 \u4f60\u53ef\u4ee5\u4f7f\u7528 Google \u7684\u5b57\u4f53\u56fe\u6807\u7d20\u6750](https://material.io/tools/icons)\n* [\u2192 \u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 antd \u7684\u6d77\u91cf svg path \u4f5c\u4e3a icon \u7684 path](https://ant.design/components/icon-cn/),\u4f60\u53ef\u4ee5\u901a\u8fc7\u5f00\u53d1\u8005\u5de5\u5177\u67e5\u770b\u5bf9\u5e94 icon \u7684 path\n* [\u2192 \u4e5f\u53ef\u4ee5\u76f4\u63a5\u4e0a antd github \u83b7\u53d6 svg path](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons/svg)\n'}});
//# sourceMappingURL=27.011a3d6c.chunk.js.map