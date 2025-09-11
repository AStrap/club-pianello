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
          <h2 className={classes.title}>PIANELLO TRAIL RUN</h2>
          <img
            alt="logo trailrun"
            src={"/img/pianello/logotrailrun.png"}
            style={{ height: "460px" }}
          />
          <h3 className={classes.title}>ISCRIVITI</h3>
          <h3 className={classes.description}>31 MAGGIO 2025</h3>
          <h4 className={classes.description}>PIANELLO - GRIGNO (TN)</h4>
          <h5 className={classes.description}>Pianello Trail Run</h5>
          <h5 className={classes.description}>
            La Pianello Trail Run Valsugana è una gara competitiva e non
            competitiva di corsa su terreni misti tra salite e discese, con
            partenza in linea, per atleti di ambo i sessi che abbiano compiuto
            14 anni età. Per i minori è previsto l’obbligo di accompagnamento di
            un maggiorenne (da compilare relativa modulistica vedi sezione
            documenti).
          </h5>
          <h5 className={classes.description}>scopri il tracciato</h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Pianello Trail Run e Circuito 3IL RUN</h2>
          <h3 className={classes.description}>Pianello Trail Run è la competizione finale del Circuito 3IL Run Valsugana +400: il tempo della discesa verrà sommato ai tempi delle due salite per la classifica finale della 3IL Run Valsugana +400.</h3>
          <h3 className={classes.description}>In collaborazione con “CRONOSCALATA PIOVEGA" - ENDURANCE TEAM e “DON CESARE TRAIL” - PRO LOCO BORGO VALSUGANA.</h3>
          <h3 className={classes.description}>CIRCUITO 3IL RUN (TODO sotto sistemare logo)</h3>
          <img
            alt="logo trailrun"
            src={"/img/pianello/logo3ilwh.png"}
            style={{ height: "100px" }}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
