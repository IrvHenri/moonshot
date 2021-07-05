import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useSortableData } from "../../hooks/useSortableData";
import arrowHelper from "../../helpers/arrowHelper";
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
    label: "Market Cap(MC)",
    minWidth: 170,
    align: "right",
  },
  {
    id: "market_cap_change_24h",
    label: "MC Change(24h)",
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

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  cell: {
    background: "#dcf6ff",
  },
  container: {
    maxHeight: 560,
    background: "#dcf6ff",
    overflowY: "auto",
  },
});
const CurrencyTable = ({ data }) => {
  const classes = useStyles();
  const { items, requestSort, direction, active } = useSortableData(data);

  return (
    <div className="currency-table">
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            aria-label="sticky table"
            className={classes.table}
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    className={classes.cell}
                    style={{ minWidth: column.minWidth }}
                    onClick={() => requestSort(column.id)}
                  >
                    <button className="table-header-btn">
                      <p>
                        {arrowHelper(column.id, active, direction)}
                        {column.label}
                      </p>
                    </button>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((row) => {
                return <Row key={row.id} {...row} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default CurrencyTable;
