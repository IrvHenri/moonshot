import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./CoinDetail.css";
import chartLabelHelper from "../../helpers/chartLabelHelper";

export default function DetailGraph({ coin, chartData }) {
  const { name } = coin;
  //PLAN
  // Get [dates , prices] from a function for each time frame
  // use state to handle mode "day,week,month"
  // ex: user clicks on "day"
  //mode switches to day and chart label helper returns dates and prices.
  // label will need to be dynamic as well

  // Need to adjust this helper potentially
  // const { prices, dates } = chartLabelHelper(chartData);
  // will take in state string ? and return dayData, weekData or monthData.
  // Will have to research more into range selector for Highcharts. Can we set state?
  const dayData = chartData.dailyChart.prices;
  console.log(dayData.length); //26 causing x axis issues?

  const options = {
    title: {
      text: "Price (USD)", //needs to be dynamic if including market cap volume
    },

    chart: {
      borderRadius: 10,
      shadow: true,
      loading: {
        hideDuration: 1000,
        showDuration: 1000,
      },
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
      // tickInterval: 4 increases interval between ticks
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
        data: dayData,
      },
    },
    series: [
      {
        name: "Price",
        data: dayData,
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
        },
        {
          type: "Week",
          count: 1,
          text: "7D",
        },
        {
          type: "Month",
          count: 1,
          text: "1M",
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
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
}
