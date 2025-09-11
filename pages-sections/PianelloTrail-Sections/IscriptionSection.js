// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
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
          <h3 className={classes.title}>QUOTE DI ISCRIZIONE</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="10.00 €"
                description="dal 03 marzo al 29 maggio"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="10.00 €"
                description="dal 30 al 31 maggio"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="10 biglietti + 1 GRATIS"
                description="acquistando 10 biglietti, l'undicesimo sarà in omaggio"
                vertical
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>L’ISCRIZIONE COMPRENDE:</h2>
          <h3 className={classes.description}>
            Pacco gara con gadget manifestazione
          </h3>
          <h3 className={classes.description}>Assicurazione</h3>
          <h3 className={classes.description}>
            Deposito zaini in prossimità della partenza/arrivo (tensostruttura
            manifestazione) NON custodito
          </h3>
          <h3 className={classes.description}>
            Ristoro intermedio (all’uscita del forte, quota circa 600m)
          </h3>
          <h3 className={classes.description}>
            Ristoro finale (presso Maso Calchèra San Giorgio)
          </h3>
          <h3 className={classes.description}>
            Assistenza sanitaria sul percorso e all’arrivo
          </h3>
          <h3 className={classes.description}>Medaglia finale</h3>
        </GridItem>
      </GridContainer>
    </div>
  );
}
