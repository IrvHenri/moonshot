import { useState, useEffect } from "react";
import axios from "axios";
function useSingleCoinData(id) {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:3001/api/coins/${id}`).then((result) => {
      setCoin(result.data);
      setLoading(false);
    });
  }, [id]);

  return [coin, loading];
}

export default useSingleCoinData;
