import React, { useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./CoinDetail.css";

export default function DetailGraph({ coin, chartData }) {
  const { name } = coin || "Add a coin!";
  const dayData = chartData ? [...chartData.dailyChart.prices] : null;
  const weeklyData = chartData ? [...chartData.weeklyChart.prices] : null;
  const monthlyData = chartData ? [...chartData.monthlyChart.prices] : null;
  const [chartMode, setChartMode] = useState(dayData);
  const options = {
    title: {
      text: name ? `${name} Price Chart (USD)` : "Add a coin!", //needs to be dynamic if including market cap volume
    },

    chart: {
      borderRadius: 10,
      shadow: true,
    },

    // issue with current x value being one day in the future (JS array index based)
    // fix amount of x points (ticks)
    xAxis: {
      dateTimeLabelFormats: {
        day: "%d-%b",
      },
      type: "datetime",
      startOnTick: true, //expands x-axis
      endOnTick: true,
    },

    // fix y-axis baseline - should start at 0 - has to do with logarithmic scale not compatible with 0
    yAxis: {
      type: "logarithmic", // sets short form currency
      labels: {
        enabled: true,
        formatter: function () {
          return "$" + this.axis.defaultLabelFormatter.call(this);
        },
      },
    },
    //bottom bar that's draggable. fix issue that is similar to x-axis
    navigator: {
      handles: {
        enabled: true,
      },
      series: {
        data: chartMode,
      },
    },
    series: [
      {
        name: "Price",
        data: chartMode,
      },
    ],
    // Look into adjusting data with this. data coming from function
    rangeSelector: {
      allButtonsEnabled: true,
      buttons: [
        {
          type: "Day",
          count: 1,
          text: "1D",
          events: {
            click: function () {
              setChartMode(dayData);
            },
          },
        },
        {
          type: "Week",
          count: 1,
          text: "7D",
          events: {
            click: function () {
              setChartMode(weeklyData);
            },
          },
        },
        {
          type: "Month",
          count: 1,
          text: "1M",
          events: {
            click: function () {
              setChartMode(monthlyData);
            },
          },
        },
      ],
      selected: 0,
    },

    //Hover on data point styling
    tooltip: {
      valuePrefix: "$",
      valueDecimals: 2,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  );
}
