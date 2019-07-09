webpackJsonp([7],{169:function(n,t){n.exports='## To \n\n\u4f7f\u7528 m-to \u8fd0\u52a8\u4e00\u5207\u3002\n\n## \u5728 Omi \u4e2d\u4f7f\u7528\n\n```jsx\n<m-to \n  from={{ number: 1 }} \n  to={{ number: 100 }} \n  duration={600}\n  easing=\'bounce-in\' \n  out={this.out} \n  delay={200}\n  onProgress={this.onProgress}\n  onBegin={this.onProgress}\n  onEnd={this.onEnd}>\n</m-to>\n```\n\n## API\n\n### Props\n\n```jsx\n{\n  from: object;\n  to: object;\n  duration: number;\n  out: object;\n  delay: number;\n  //easing graphs http://tweenjs.github.io/tween.js/examples/03_graphs.html\n  easing: "quadratic-in" | "quadratic-out" | "quadratic-in-out" | "cubic-in" | "cubic-out" | "cubic-in-out" | "quartic-in" | "quartic-out" | "quartic-in-out" | "quintic-in" | "quintic-out" | "quintic-in-out" | "sinusoidal-in" | "sinusoidal-out" | "sinusoidal-in-out" | "exponential-in" | "exponential-out" | "exponential-in-out" | "circular-in" | "circular-out" | "circular-in-out" | "elastic-in" | "elastic-out" | "elastic-in-out" | "back-in" | "back-out" | "back-in-out" | "bounce-in" | "bounce-out" | "bounce-in-out";\n  start: boolean;\n}\n```\n\n## Demo\n\n```jsx\nimport { define, WeElement, render, h } from \'omi\'\nimport \'omim/to\'\n\ndefine(\'my-app\', class extends WeElement {\n\n  number = 2\n\n  from = this.number\n  to = this.number\n  out = {\n    number: this.number\n  }\n\n  onInput = (e) => {\n    this.to = Number(e.target.value)\n    this.from = this.out.number\n    this.number = this.to\n    this.update()\n  }\n\n  onProgress = () => {\n    this.update()\n  }\n\n  onClick = () => {\n    this.start = true\n    this.update()\n  }\n\n  start = false\n  outs = [{ width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }]\n\n  render() {\n\n    return (\n      <div>\n        <h3>Simple</h3>\n        <input type=\'number\' onInput={this.onInput} value={this.number} step={2}></input>\n        <div>{this.out.number.toFixed(0)}</div>\n        <div>{this.out.number.toFixed(0)}*{this.out.number.toFixed(0)}={(this.out.number * this.out.number).toFixed(0)}</div>\n        <div style={{ width: this.out.number * 5 + \'px\', background: \'red\', height: \'5px\' }}></div>\n        <m-to from={{ number: this.from }} easing=\'bounce-in\' onProgress={this.onProgress} to={{ number: this.to }} out={this.out} duration={1000}>\n        </m-to>\n\n        <h3>Group</h3>\n\n        {this.outs.map((item, index) =>\n          <div style={{ marginTop: \'5px\', width: this.outs[index].width + \'px\', background: \'red\', height: \'5px\' }}></div>\n        )}\n        <button onClick={this.onClick}>Play</button>\n        {this.outs.map((item, index) =>\n          <m-to from={{ width: 10 }} start={this.start} easing="bounce-out" delay={100 * index} onProgress={this.onProgress} to={{ width: 200 }} out={this.outs[index]} duration={600}>\n          </m-to>\n        )}\n      </div>\n    )\n  }\n})\n\nrender(<my-app />, \'body\')\n```'}});
//# sourceMappingURL=7.95b75015.chunk.js.map