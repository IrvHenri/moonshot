import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#CFD6E4",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#132455",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    width: 150,
    marginLeft: "auto",
    marginTop: ".5em",
  },
});

export default function ProgressBar(props) {
  const classes = useStyles();
  const { maxSupply, circulatingSupply } = props;
  let percentage = (circulatingSupply / maxSupply) * 100;
  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={percentage} />
    </div>
  );
}
