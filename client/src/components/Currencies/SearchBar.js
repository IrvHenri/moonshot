import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SearchBar({ handleChange, theme }) {
  return (
    <TextField
      placeholder="Search"
      onChange={handleChange}
      aria-label="search"
      style={{
        width: "20%",
        display: "block",
        marginLeft: "auto",
        padding: "0 1.7em",
        background: theme === "light" ? "#f9f9f9" : "#dcf6ff",
      }}
    />
  );
}
