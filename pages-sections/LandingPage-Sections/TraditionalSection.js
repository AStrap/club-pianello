import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div
      className={classes.section}
      style={{ background: "#4884c4", borderRadius: "0 0 6px 6px" }}
    >
      <GridContainer justify="center">
        <GridItem xs={12} sm={4} md={4}>
          <h2 className={classes.title}>2 GIUGNO 2025</h2>
          <h3 className={classes.description}>
            TRADIZIONALE PRANZO DELLE CONTRADE DI MARTINCELLI, PIANELLO E VALLON
          </h3>
          <h5 className={classes.description}>Ore 12.00</h5>
          <h3 className={classes.description}>
            SS. MESSA S.M. AUSILIATRICE PRESSO LA CHIESETTA DI MARTINCELLI
          </h3>
          <h5 className={classes.description}>Ore 16.00</h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
