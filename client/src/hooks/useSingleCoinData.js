import { useState, useEffect } from "react";
import axios from "axios";
function useSingleCoinData(id) {
  const [coin, setCoin] = useState({});
  const [chartData, setChartData] = useState({
    dailyChart: {},
    weeklyChart: {},
    monthlyChart: {},
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`/api/coins/${id}`)
      .then((result) => {
        const { coin, dailyChart, weeklyChart, monthlyChart } = result.data;
        setCoin((prev) => ({ ...prev, ...coin }));
        setChartData((prev) => ({
          ...prev,
          dailyChart: { ...dailyChart },
          weeklyChart: { ...weeklyChart },
          monthlyChart: { ...monthlyChart },
        }));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return { coin, loading, chartData };
}
export default useSingleCoinData;
