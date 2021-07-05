import { useState, useEffect } from "react";
import axios from "axios";

function useCoinData() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((result) => {
        setCoins(result.data);
        setLoading(false);
      });
  }, []);

  return [coins, loading];
}

export default useCoinData;
