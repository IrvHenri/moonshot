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
