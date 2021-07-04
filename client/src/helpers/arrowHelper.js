import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
export default function arrowHelper(id, active, direction) {
  if (id === active) {
    if (direction === "ascending") {
      return <TiArrowSortedUp />;
    } else if (direction === "descending") {
      return <TiArrowSortedDown />;
    }
  }
  return;
}

// check if id is equal to the active header
//if direction = ascending render up arrow
// else if direction = descending render down arrow
