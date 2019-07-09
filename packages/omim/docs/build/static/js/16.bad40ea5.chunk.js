webpackJsonp([16],{160:function(n,o){n.exports='## Snackbar \n\nSnackbar \u5728\u5c4f\u5e55\u5e95\u90e8\u63d0\u4f9b\u5173\u4e8e\u5e94\u7528\u7a0b\u5e8f\u8fdb\u7a0b\u7684\u7b80\u77ed\u6d88\u606f\u3002\n\n## \u4f7f\u7528\n\n```html\n<m-snackbar id="m-snackbar-a" button-text="RETRY" msg="Can\'t send photo. Retry in 5 seconds."></m-snackbar>\n<m-snackbar id="m-snackbar-b" button-text="UNDO" msg="Your photo has been archived." leading></m-snackbar>\n<m-snackbar id="m-snackbar-c" stacked msg=\'This item already has the label "travel". You can add a new label.\' button-text="ADD A NEW LABEL"></m-snackbar>\n```\n\n## Omi \u4e2d\u4f7f\u7528\n\nJSX:\n\n```jsx\n<m-snackbar\n  onClosed={this.onClosedA}\n  onButtonClick={this.onButtonClickA}\n  onIconButtonClick={this.onIconButtonClickA}\n  buttonText="RETRY"\n  msg="Can\'t send photo. Retry in 5 seconds."\n  show={this.aShow}\n></m-snackbar>\n<m-snackbar\n  onClosed={this.onClosedB}\n  onButtonClick={this.onButtonClickB}\n  onIconButtonClick={this.onIconButtonClickB}\n  buttonText="UNDO"\n  msg="Your photo has been archived."\n  leading show={this.bShow}\n></m-snackbar>\n<m-snackbar\n  onClosed={this.onClosedC}\n  onButtonClick={this.onButtonClickC}\n  onIconButtonClick={this.onIconButtonClickC}\n  stacked msg=\'This item already has the label "travel". You can add a new label.\'\n  buttonText="ADD A NEW LABEL"\n  show={this.cShow}\n></m-snackbar>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| show | boolean | -- | \u662f\u5426\u663e\u793a\u5f39\u7a97 |\n| stacked | boolean | -- | \u6309\u94ae\u4e0e\u6587\u672c\u5206\u4e24\u5c42 |\n| msg | string | -- | \u63d0\u793a\u5185\u5bb9 |\n| buttonText | string | -- | \u6309\u94ae\u6587\u672c |\n| leading | boolean | -- | \u5f39\u7a97\u51fa\u73b0\u5728\u4e3b\u7a97\u53e3\u89d2\u843d |\n| onOpened | function | -- | \u6253\u5f00\u5b8c\u6210\u540e\u89e6\u53d1 |\n| onClosed | function | -- | \u5173\u95ed\u5b8c\u6210\u540e\u89e6\u53d1 |\n| onButtonClick | function | -- | \u5355\u51fb\u6309\u94ae\u89e6\u53d1 |\n| onIconButtonClick | function | -- | \u5355\u51fb\u56fe\u6807\u6309\u94ae\u89e6\u53d1 |\n'}});
//# sourceMappingURL=16.bad40ea5.chunk.js.map