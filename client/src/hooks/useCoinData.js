import { useState, useEffect } from "react";
import axios from "axios";

function useCoinData() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/api/coins/").then((result) => {
      setCoins(result.data);
      setLoading(false);
    });
  }, []);

  return [coins, loading];
}

export default useCoinData;
