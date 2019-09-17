import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const myDataSource = {
	"chart": {
		"caption": "Countries With Most Oil Reserves [2017-18]",
		"subCaption": "In MMbbl = One Million barrels",
		"xAxisName": "Country",
		"yAxisName": "Reserves (MMbbl)",
		"numberSuffix": "K",
		"theme": "fusion"
	},
	"data": [
		{
			"label": "Venezuela",
			"value": "290"
		},
		{
			"label": "Saudi",
			"value": "260"
		},
		{
			"label": "Canada",
			"value": "180"
		},
		{
			"label": "Iran",
			"value": "140"
		},
		{
			"label": "Russia",
			"value": "115"
		},
		{
			"label": "UAE",
			"value": "100"
		},
		{
			"label": "US",
			"value": "30"
		},
		{
			"label": "China",
			"value": "30"
		}
	]
};

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: myDataSource,
};

class Sample extends Component {
  // Convert the chart to a 2D Pie chart after 5 secs.
  alterChart(chart) {
    setTimeout(() => {
      chart.chartType('pie2d');
    }, 5000);
  }

  render() {
    return (
      <div>
        <ReactFC {...chartConfigs} onRender={this.alterChart} />
      </div>
    );
  }
}


export default Sample;
