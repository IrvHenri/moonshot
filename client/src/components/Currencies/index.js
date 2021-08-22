import React, { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import TableTitle from "./TableTitle";
import SearchBar from "./SearchBar";
import CurrencyTable from "./CurrencyTable";
import useCoinData from "../../hooks/useCoinData";
export default function Cryptocurrencies() {
  const [coins, loading] = useCoinData();
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  // const filteredCoins =
  //   coins.length > 1 &&
  //   coins.filter((coin) =>
  //     coin.name.toLowerCase().includes(search.toLowerCase())
  //   );

  const filteredCoins = coins.filter((coin) =>
    search ? coin.name.toLowerCase().includes(search.toLowerCase()) : true
  );

  return (
    <div className="currencies-page">
      {loading ? (
        <div className="table-loading">
          <CircularProgress size={100} />
        </div>
      ) : (
        <div
          className={theme === "light" ? "light-mode-currencies-table" : null}
        >
          <div className={theme === "light" ? "light-mode-table-header" : null}>
            <TableTitle data={coins} theme={theme} />
            <SearchBar handleChange={handleChange} theme={theme} />
          </div>
          <CurrencyTable data={filteredCoins} theme={theme} />
        </div>
      )}
    </div>
  );
}
