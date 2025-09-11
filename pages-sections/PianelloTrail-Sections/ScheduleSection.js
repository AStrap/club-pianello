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
          <h2 className={classes.title}>SABATO 31 MAGGIO 2025</h2>
          <h4 className={classes.description}>Giornata Pianello Trail Run con spettacolo pirotecnico</h4>
          <h3 className={classes.title}>Ore 13.30 ESTERNO TENSOSTRUTTURA</h3>
          <h3 className={classes.description}>Accreditamento pacco gara Pianello Trail Run</h3>
          <h3 className={classes.title}>Ore 16.00 ESTERNO TENSOSTRUTTURA</h3>
          <h3 className={classes.description}>Accreditamento pacco gara Pianello Trail Run</h3>
          <h3 className={classes.title}>Ore 19.00 TENSOSTRUTTURA  </h3>
          <h3 className={classes.description}>Apertura stand gastronomico</h3>
          <h4 className={classes.description}>Primi piatti, carne alla griglia, contorni e bruschette </h4>
          <h3 className={classes.title}>Ore 20.30 TENSOSTRUTTURA TRIFISA</h3>
          <h3 className={classes.description}>Serata danzante</h3>
          <h3 className={classes.title}>Ore 23.00 ESTERNO TENSOSTRUTTURA SPETTACOLO PIROTECNICO!!!</h3>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h4 className={classes.title}>
            In caso di maltempo o altre situazioni che non consentano lo svolgimento in sicurezza della manifestazione, il comitato organizzatore si riserva di posticipare o annullare la gara. In caso di annullamento della gara per condizioni meteo avverse o per altre motivazioni indipendenti alla volontà degli organizzatori, ogni concorrente sarà automaticamente iscritto all'edizione 2026. In nessun caso la quota verrà resa e per nessun modo potrà essere fatta rivalsa sul comitato organizzatore e sulla società organizzatrice.   
          </h4>
          <h4 className={classes.description}>CONTATTACI</h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
