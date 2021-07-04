import { Link } from "react-router-dom";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import currencyFormatter from "../../helpers/currencyFormatter";
import Avatar from "@material-ui/core/Avatar";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import "./index.css";

const Row = (props) => {
  const {
    id,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    market_cap,
    market_cap_change_24h,
    circulating_supply,
  } = props;
  const priceStyling =
    price_change_percentage_24h > 0 ? "market-up" : "market-down";
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell align={"left"}>
        <Link
          to={`/prices/${id}`}
          style={{ textDecoration: "none", color: "#232b2b" }}
        >
          <div className="first-cell">
            <Avatar alt="coin logo" src={image} />
            <p>{name}</p>
            <small>{symbol}</small>
          </div>
        </Link>
      </TableCell>

      <TableCell align={"right"}>
        <p>{currencyFormatter.format(current_price)}</p>
      </TableCell>
      <TableCell align={"right"}>
        <p className={`${priceStyling} second-cell `}>
          {price_change_percentage_24h > 0 ? (
            <TiArrowSortedUp />
          ) : (
            <TiArrowSortedDown />
          )}
          {price_change_percentage_24h.toFixed(2)}%
        </p>
      </TableCell>
      <TableCell align={"right"}>
        <p>{currencyFormatter.format(market_cap)}</p>
      </TableCell>
      <TableCell align={"right"}>
        <p>{currencyFormatter.format(market_cap_change_24h)}</p>
      </TableCell>
      <TableCell align={"right"}>
        <div className="last-cell">
          <p>{circulating_supply.toLocaleString()}</p>
          <small>{symbol.toUpperCase()}</small>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Row;
