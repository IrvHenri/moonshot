import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./CoinDetail.css";

export default function DetailGraph({ coin, chartData }) {
  const { name } = coin || "Add a coin!";
  const dayData = chartData ? [...chartData.dailyChart.prices] : null;
  const weeklyData = chartData ? [...chartData.weeklyChart.prices] : null;
  const monthlyData = chartData ? [...chartData.monthlyChart.prices] : null;
  const [chartMode, setChartMode] = useState(dayData);

  useEffect(() => {
    setChartMode(dayData);
  }, [chartData]);

  const options = {
    title: {
      text: name ? `${name} Price Chart (USD)` : "Add a coin!",
    },

    chart: {
      borderRadius: 10,
      shadow: true,
    },

    xAxis: {
      dateTimeLabelFormats: {
        day: "%d-%b",
      },
      type: "datetime",
      startOnTick: true, //expands x-axis
      endOnTick: true,
    },

    yAxis: {
      type: "logarithmic", // sets short form currency
      labels: {
        enabled: true,
        formatter: function () {
          return "$" + this.axis.defaultLabelFormatter.call(this);
        },
      },
    },

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
