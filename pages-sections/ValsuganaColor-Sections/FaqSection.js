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
        <GridItem xs={12} sm={12} md={9}>
          <h2 className={classes.title}>FAQ</h2>
          <h4 className={classes.description}>
            Posso partecipare senza iscrizione?
          </h4>
          <h4 className={classes.description}>
            Cosa mi viene dato in seguito all’iscrizione?
          </h4>
          <h4 className={classes.description}>
            Dove posso ritirare il mio pacco gara?
          </h4>
          <h4 className={classes.description}>
            I colori sono dannosi per me o i vestiti?
          </h4>
          <h4 className={classes.description}>
            Esiste un limite di età per essere un color runner?
          </h4>
          <h4 className={classes.description}>
            È possibile essere rimborsati?
          </h4>
          <h4 className={classes.description}>
            Ho altri dubbi a chi posso rivolgermi?
          </h4>
          <h4 className={classes.description}>
            Posso spingere un passeggino lungo il percorso?
          </h4>
          <h4 className={classes.description}>
            È possibile trasferire la mia iscrizione ad altra persona?
          </h4>
          <h4 className={classes.description}>
             Devo produrre dei documenti particolari per iscrivermi?
          </h4>
          <h4 className={classes.description}>
            Devo essere un corridore professionista per partecipare?
          </h4>
          <h4 className={classes.title}>
            CONTATTACI
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
