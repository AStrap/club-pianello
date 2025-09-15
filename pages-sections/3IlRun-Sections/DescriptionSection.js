// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <img
            alt="logo 3ilrun"
            src={"/img/pianello/3illogo.png"}
            style={{ height: "260px" }}
          />
          <h3 className={classes.title}>
            Il circuito che mette alla prova la tua resistenza!
          </h3>
          <h3 className={classes.title}>
            Tre competizioni D+400 con premiazioni individuali. Partecipando a
            tutte, accederai alla classifica finale, ottenuta sommando i tempi
            delle prove disputate.{" "}
          </h3>
          <img
            alt="img manRunner"
            src={"/img/pianello/manRunner.png"}
            style={{ height: "460px" }}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
