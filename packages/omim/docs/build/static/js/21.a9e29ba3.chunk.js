webpackJsonp([21],{105:function(n,e){n.exports="## Line\n\n\u7ebf\u72b6\u56fe\u3002\n\n## \u4f7f\u7528\n\n```html\n<m-line id=\"myLine\" width=\"600\" height=\"300\" \n  data=\"{\n    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n    datasets: [{\n      label: '# of Votes',\n      data: [12, 19, 3, 5, 2, 3],\n      backgroundColor: 'rgba(255, 99, 132, .4)',\n      borderColor: 'rgb(255, 99, 132)',\n      borderWidth: 1\n    }]\n  }\"\n\n  options=\"{\n    responsive: true,\n    title: {\n      display: true,\n      text: 'Omi-chart Line Chart'\n    },\n    tooltips: {\n      mode: 'index',\n      intersect: false\n    },\n    hover: {\n      mode: 'nearest',\n      intersect: true\n    },\n    scales: {\n      xAxes: [{\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'Month'\n        }\n      }],\n      yAxes: [{\n        display: true,\n        scaleLabel: {\n          display: true,\n          labelString: 'Value'\n        }\n      }]\n    }\n  }\">\n</m-line>\n```\n\n## \u66f4\u65b0\u56fe\u8868\n\n```js\n//\u83b7\u53d6\u8be5\u5143\u7d20\nvar chart = document.querySelector('#myLine')\n//\u66f4\u6539\u56fe\u8868\u7684\u6570\u636e\nchart.props.data.datasets.forEach(dataset => {\n  dataset.data.forEach((item, index) => {\n    dataset.data[index] = Math.random() * 100\n  })\n})\n//\u66f4\u65b0\u56fe\u8868\u89c6\u56fe\nchart.update()\n```\n\n## API\n\n### Props\n\n```jsx\n{\n  data: object,\n  options: object,\n  width: number,\n  height: number\n}\n```"}});
//# sourceMappingURL=21.a9e29ba3.chunk.js.map