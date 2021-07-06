import { useState, useEffect } from "react";
import axios from "axios";
function useSingleCoinData(id) {
  const [coin, setCoin] = useState({});
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:3001/api/coins/${id}`).then((result) => {
      const { coin, chartData } = result.data;
      setCoin((prev) => ({ ...prev, ...coin }));
      setChartData((prev) => ({ ...prev, ...chartData }));
      setLoading(false);
    });
  }, [id]);

  return { coin, loading, chartData };
}

export default useSingleCoinData;
