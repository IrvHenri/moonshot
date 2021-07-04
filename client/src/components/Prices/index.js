import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Row from "./Row";
import "./index.css";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "current_price",
    label: "Price",
    minWidth: 100,
    align: "right",
  },
  {
    id: "price_change_percentage_24h",
    label: "24h %",
    minWidth: 170,
    align: "right",
  },
  {
    id: "market_cap",
    label: "Market Cap",
    minWidth: 170,
    align: "right",
  },
  {
    id: "market_cap_change_24h",
    label: "Volume(24)",
    minWidth: 170,
    align: "right",
  },
  {
    id: "circulating_supply",
    label: "Circulating Supply",
    minWidth: 170,
    align: "right",
  },
];

const rows = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 34682,
    market_cap: 650869560416,
    market_cap_rank: 1,
    fully_diluted_valuation: 729087178650,
    total_volume: 22766841138,
    high_24h: 34924,
    low_24h: 33174,
    price_change_24h: 1257.03,
    price_change_percentage_24h: 3.76078,
    market_cap_change_24h: 24161151719,
    market_cap_change_percentage_24h: 3.85525,
    circulating_supply: 18747087,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 64805,
    ath_change_percentage: -46.42388,
    ath_date: "2021-04-14T11:54:46.763Z",
    atl: 67.81,
    atl_change_percentage: 51102.42751,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2021-07-03T18:24:23.220Z",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});
const TableData = () => {
  const classes = useStyles();

  return (
    <div className="prices-table">
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return <Row key={row.id} {...row} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default TableData;
