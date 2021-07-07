import moment from "moment";

export default function chartLabelHelper(chartData) {
  const prices = chartData.dailyChart.prices.map((price) => price[1]);
  const dates = chartData.dailyChart.prices.map((price) =>
    moment.unix(price[0] / 1000).format("DD MMM  kk:mm")
  );
  return { prices, dates };
}
