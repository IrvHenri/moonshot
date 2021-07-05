import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import TableTitle from "./TableTitle";
import CurrencyTable from "./CurrencyTable";
import useCoinData from "../../hooks/useCoinData";
export default function Cryptocurrencies() {
  const [coins, loading] = useCoinData();

  return (
    <div className="currencies-page">
      {loading ? (
        <div className="table-loading">
          <CircularProgress size={100} />
        </div>
      ) : (
        <>
          <TableTitle data={coins} />
          <CurrencyTable data={coins} />
        </>
      )}
    </div>
  );
}
