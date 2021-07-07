import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./CoinDetail.css";
import chartLabelHelper from "../../helpers/chartLabelHelper";

// import currencyFormatterHelpers from "../../helpers/currencyFormatterHelpers";
// const { formatMoneyShort } = currencyFormatterHelpers();

//PLAN

// Get dates and prices from a function for each time frame
// chart label helper will take in mode state.
// use state to handle mode "day,week,month"
//user clicks on day
//mode switches to day and chart label helper returns dates and prices.
// label will need to be dynamic as well

export default function DetailGraph({ coin, chartData }) {
  const { name } = coin;
  const { prices, dates } = chartLabelHelper(chartData);

  // const datesArr = chartData.dailyChart.prices.map((price) => price[0]);
  // console.log(datesArr);
  const dayData = chartData.dailyChart.prices;
  console.log(dayData);

  const options = {
    title: {
      text: "Price (USD)",
    },
    lang: {
      numericSymbols: ["k", "M", "G", "T", "P", "E"],
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
    xAxis: {
      dateTimeLabelFormats: {
        day: "%d-%b",
      },
      type: "datetime",
    },
    yAxis: {
      type: "logarithmic",
      labels: {
        enabled: true,
        formatter: function () {
          return "$" + this.axis.defaultLabelFormatter.call(this);
        },
      },
    },
    //bottom bar that's draggable
    navigator: {
      handles: {
        enabled: true,
      },
      // series: {
      //   data:
      // },
    },
    series: [
      {
        name: "Price",
        data: dayData,
      },
    ],

    rangeSelector: {
      allButtonsEnabled: true,
      buttons: [
        {
          type: "Day",
          count: 1,
          text: "1d",
        },
        {
          type: "Week",
          count: 11,
          text: "7d",
        },
        {
          type: "Month",
          count: 1,
          text: "1M",
        },
      ],
      selected: 0,
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
