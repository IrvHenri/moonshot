import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SearchBar({ handleChange, theme }) {
  return (
    <TextField
      placeholder="Search"
      onChange={handleChange}
      aria-label="search"
      className="search-input-table"
      style={{
        display: "block",
        padding: "0 1.7em",
        background: theme === "light" ? "#f9f9f9" : "#dcf6ff",
      }}
    />
  );
}
