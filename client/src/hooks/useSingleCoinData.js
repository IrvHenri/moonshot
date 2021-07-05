import { useState, useEffect } from "react";
import axios from "axios";
function useSingleCoinData(id) {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((result) => {
      setCoin(result.data);
      setLoading(false);
    });
  }, [id]);

  return [coin, loading];
}

export default useSingleCoinData;
