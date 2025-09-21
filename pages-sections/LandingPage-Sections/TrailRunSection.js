import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{background: "#e44051", borderRadius: "6px 6px 0 0"}}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>31 MAGGIO 2025</h2>
          <img
            alt="logo trailrun"
            src={"/img/pianello/logotrailrun.png"}
            style={{ height: "400px" }}
          />
          <h3 className={classes.description}>
            PIANELLO TRAIL RUN, SPETTACOLO PIROTECNICO, SERATA DANZANTE
          </h3>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Button
            href="/rankingTrail"
            color="transparent"
            className={classes.navLink}
          >
            CLASSIFICHE TRAIL RUN
          </Button>
          <Button
            href="/3IlRun"
            color="transparent"
            className={classes.navLink}
          >
            CIRCUITO 3IL RUN
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
