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
          <h2 className={classes.title}>PIANELLO TRAIL RUN</h2>
          <img
            alt="logo trailrun"
            src={"/img/pianello/logotrailrun.png"}
            style={{ height: "400px" }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Button
            href="https://www.visitvalsugana.it/it/landing-esperienze/#/esperienze/TRN/8e531b71-82dc-4dcb-b862-481ce2e314d8/pianello-vertical-run---25-maggio-2024"
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: "30px", marginTop: "20px" }}
          >
            ISCRIVITI
          </Button>
          <h3 className={classes.title} style={{ marginBottom: "0" }}>
            31 MAGGIO 2025
          </h3>
          <h4 className={classes.description} style={{ marginTop: "0" }}>
            PIANELLO - GRIGNO (TN)
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.title}>PIANELLO TRAIL RUN</h5>
          <h5 className={classes.description}>
            La Pianello Trail Run Valsugana è una gara competitiva e non
            competitiva di corsa su terreni misti tra salite e discese, con
            partenza in linea, per atleti di ambo i sessi che abbiano compiuto
            14 anni età. Per i minori è previsto l’obbligo di accompagnamento di
            un maggiorenne (da compilare relativa modulistica vedi sezione
            documenti).
          </h5>
          <Button
            href="/3IlRun"
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
