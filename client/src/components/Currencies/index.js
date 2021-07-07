import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import TableTitle from "./TableTitle";
import SearchBar from "./SearchBar";
import CurrencyTable from "./CurrencyTable";
import useCoinData from "../../hooks/useCoinData";
export default function Cryptocurrencies() {
  const [coins, loading] = useCoinData();
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="currencies-page">
      {loading ? (
        <div className="table-loading">
          <CircularProgress size={100} />
        </div>
      ) : (
        <>
          <TableTitle data={coins} />
          <SearchBar handleChange={handleChange} />
          <CurrencyTable data={filteredCoins} />
        </>
      )}
    </div>
  );
}
