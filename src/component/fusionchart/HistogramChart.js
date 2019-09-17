import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFusioncharts.fcRoot(FusionCharts, Charts, FusionTheme);

FusionCharts.options.creditLabel = false;
class HistograhpChart extends Component {

    static defaultProps = { 
        type: 'mscolumn2d',
        category: [],
        firstData: [],
        firstLabel: '',
        secondLabel: '',
        secondData: [],
        caption: '',
        height: 300
    }

   render() {
      return (
      <ReactFusioncharts
         type={`${this.props.type}`}
         width ={'100%'}
         height={`${this.props.height}`}
         dataFormat = "JSON"
         dataSource = {{
            "chart": {
                "dateformat": "mm/dd/yyyy hh:mm:ss",
                "dateFormat": "mm/dd/yyyy",
                "caption": this.props.caption,
                "showBorder": "0",
                "animation": '0',
                "bgColor": "#ffffff",
                "paletteColors": this.props.bg,
                "xAxisName": "",
                "xAxisNameFontSize": "14",
                "baseFont": `'Open Sans', sans-serif`,
                "xAxisNameBorderPadding": "30",
                "yAxisName": "",
                "yAxisNameFontSize": "14",
                "yAxisNameBorderPadding": "30",
                "pYAxisNameBorderPadding": "30",
                "borderAlpha": "20",
                "labelFontSize": "13",
                "useDataPlotColorForLabels": "1",
                "canvasBorderAlpha": "0",
                "usePlotGradientColor": "0",
                "captionHorizontalPadding": "2",
                "plotBorderAlpha": "10",
                "placevaluesInside": "1",
                "rotatevalues": "0",
                "valueFontColor": "#ffffff",
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "captionFontSize": "16",
                "captionFontBold": '0',
                "showLabels": "1",
                "plottooltext": "<b>$dataValue</b> <b>$seriesName</b> in $label",
                "theme": "fint",
                "drawcrossline": "1"
            },
            "categories": [
              {
                "category": this.props.category
              }
            ],
            "dataset": [
              {
                "seriesname": this.props.firstLabel,
                "data": this.props.firstData
              },
              {
                "seriesname": this.props.secondLabel,
                "data": this.props.secondData
              },
              {
                "seriesname": this.props.thirdLabel,
                "data": this.props.thirdData
              },
              {
                "seriesname": this.props.fourthLabel,
                "data": this.props.fourthtData
              },
              {
                "seriesname": this.props.fifthLabel,
                "data": this.props.fifthData
              },
              {
                "seriesname": this.props.sixthLabel,
                "data": this.props.sixthData
              },
              {
                "seriesname": this.props.seventhLabel,
                "data": this.props.seventhData
              }
            ]
         }} />
      );
   }
}

export default HistograhpChart;