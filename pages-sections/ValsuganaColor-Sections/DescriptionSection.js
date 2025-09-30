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
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>VALSUGANA COLOR RUN CRAZY</h2>
          <img
            alt="logo trailrun"
            src={"/img/pianello/logocolorrun.png"}
            style={{ height: "400px" }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Button
            href="https://www.visitvalsugana.it/it/landing-esperienze/#/esperienze/TRN/f3de36c6-fdcd-46bd-93c3-3e06a562f699/valsugana-color-run"
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: "30px", marginTop: "20px" }}
          >
            ISCRIVITI
          </Button>
          <h3 className={classes.title} style={{ marginBottom: "0" }}>
            1 GIUGNO 2025
          </h3>
          <h4 className={classes.description} style={{ marginTop: "0" }}>
            PIANELLO - GRIGNO (TN)
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.title}>
            PIANELLO CRAZY COLOR RUN - 5km COLORATISSIMI
          </h5>
          <h5 className={classes.description}>
            La Valsugana Color Run Crazy è una corsa non competitiva in 10
            tappe, che attraverserà gli abitati del comune di Grigno (TN):
            colori, musica e tanto divertimento… Serata con DJ SET, stand
            gastronomico e gonfiabili presso il capannone in Località Pianello.
          </h5>
          <Button
            href="/valsuganaColor"
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: "15px" }}
          >
            Scopri il tracciato
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
