webpackJsonp([127],{49:function(n,e){n.exports="## ColorPicker\n\nColorPicker base on [pickr](https://github.com/Simonwep/pickr).\n\n## Usage\n\n```html\n<m-color-picker \n  id='picker' \n  save=\"0\" \n  preview=\"0\" \n  button='0' \n  clear='0' \n  width=\"300px\">\n</m-color-picker>\n\n<script>\n  var picker = document.querySelector('#picker')\n  picker.addEventListener('change', function(evt){\n    console.log(evt.detail.color)\n  })\n<\/script>\n```\n\n## API\n\n### Props\n\n```jsx\n{\n  button?: boolean;\n  preview?: boolean;\n  opacity?: boolean;\n  hue?: boolean;\n  hex?: boolean;\n  rgba?: boolean;\n  hsla?: boolean;\n  hsva?: boolean;\n  input?: boolean;\n  clear?: boolean;\n  save?: boolean;\n  cmyk?: boolean;\n  default?: string;\n  swatches?: string[];\n  inline?: boolean;\n  strings?: {\n      save: string;\n      clear: string;\n  };\n  width?: string;\n}\n```\n\n### defaultProps\n\n```jsx\n{\n  button: true,\n  preview: true,\n  opacity: true,\n  hue: true,\n\n  hex: true,\n  rgba: true,\n  hsla: true,\n  hsva: false,\n  input: true,\n  clear: true,\n  save: true,\n  cmyk: false,\n\n  default: '#3365B7',\n\n  swatches: [],\n  inline: true,\n\n  strings: {\n    save: 'Save',  // Default for save button\n    clear: 'Clear' // Default for clear button\n  }\n}\n```"}});
//# sourceMappingURL=127.3832289b.chunk.js.map