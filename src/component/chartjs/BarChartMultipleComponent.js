import React, {Component} from "react";
import { Bar } from "react-chartjs-2";


class BarChartMultipleComponent extends Component {

    static defaultProps = {
        displayTitle: false,
        displayLegend: false,
        legendPosition: 'right',
        titleText: '',
        titleFontSize: 25,
        height: 120,
        labels: [],
        values: [],
        bg: [],
        datasets: []
    }

    render(){
        return <Bar
            data={{
                    labels: this.props.labels,
                    datasets: this.props.datasets
            }} 
             options={{ 
                scales: {
                    xAxes: [{
                        ticks: {
                            autoSkip: false
                      }
                    }],
                    yAxes: [{
                      
                    }],
                },
                 title:{
                    display: this.props.displayTitle,
                    text: this.props.titleText,
                    fontSize: this.props.titleFontSize
            },
        
            legend:{
                display: this.props.displayLegend,
                position: this.props.legendPosition,
                    labels: {
                        fontColor: '#000'
                    }
                }
            }} 
            height={this.props.height}/>
    }
}

export default BarChartMultipleComponent;