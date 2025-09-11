import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
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
