import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SearchBar({ handleChange }) {
  return (
    <TextField
      placeholder="Search"
      onChange={handleChange}
      aria-label="search"
      style={{
        width: "20%",
        marginLeft: "auto",
        padding: "0 1.7em",
      }}
    />
  );
}
