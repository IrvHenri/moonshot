import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "@material-ui/core/Container";
import "./index.css";
export default function LoggedOut() {
  return (
    <div className="portfolio-jumbo">
      <article className="portfolio-signup-article">
        <h1>Sign up Today</h1>
        <h3>Stay up to date with the performance of your investments.</h3>
        <div>
          <Button text="Create your Portfolio" />{" "}
          <Link to={"/login"}>Login</Link>
        </div>
      </article>
      <article className="portfolio-graph-article"></article>
    </div>
  );
}
