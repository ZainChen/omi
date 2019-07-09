webpackJsonp([75],{101:function(n,e){n.exports="## Toggle Buttons\n\nToggle buttons can be used to group related options, supports multiple and single selection.\n\n## Usage\n\n```html\n<m-toggle-buttons id=\"myBtnsA\" items=\"[\n  { selected: true, path: 'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z' },\n  { path: 'M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z' },\n  { path: 'M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z' },\n  { disabled: true, path: 'M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z' }\n]\"></m-toggle-buttons>\n\n<m-toggle-buttons id=\"myBtnsB\" multiple-selection items=\"[\n  { selected: true, icon: 'account_balance', value: 0 },\n  { icon: 'stars', value: 1 },\n  { icon: 'av_timer', value: 2 },\n  { icon: 'equalizer', value: 3 }\n]\"></m-toggle-buttons>\n\n<script>\n  var btnsA = document.querySelector('#myBtnsA')\n  btnsA.addEventListener('change', function (evt) {\n    console.log(evt.detail)\n  })\n\n  var btnsB = document.querySelector('#myBtnsB')\n  btnsB.addEventListener('change', function (evt) {\n    console.log(evt.detail)\n  })\n<\/script>\n```\n\n## API\n\n### Props\n\n```jsx\n{\n  multipleSelection?: boolean\n  items: any[] \n}\n```\n\n### Events\n\n* change"}});
//# sourceMappingURL=75.a8378b47.chunk.js.map