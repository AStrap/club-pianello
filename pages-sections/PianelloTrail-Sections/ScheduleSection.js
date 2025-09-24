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
    <div className={classes.section} style={{ backgroundColor: "#e65e6cff" }}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title} style={{ marginTop: "0" }}>
            SABATO 31 MAGGIO 2025
          </h2>
          <h4 className={classes.description} style={{ marginTop: "0" }}>
            Giornata Pianello Trail Run con spettacolo pirotecnico
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer justify="center">
            <GridItem xs={4} sm={4} md={2} style={{ marginTop: "10px" }}>
              <h3 className={classes.description}>Ore 13.30</h3>
            </GridItem>
            <GridItem xs={4} sm={4} md={4}>
              <h3 className={classes.title}>ESTERNO TENSOSTRUTTURA</h3>
              <h4 className={classes.description}>
                Accreditamento pacco gara Pianello Trail Run
              </h4>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer justify="center">
            <GridItem xs={4} sm={4} md={2} style={{ marginTop: "10px" }}>
              <h3 className={classes.description}>Ore 16.00</h3>
            </GridItem>
            <GridItem xs={4} sm={4} md={4}>
              <h3 className={classes.title}>ESTERNO TENSOSTRUTTURA</h3>
              <h4 className={classes.description}>
                Partenza Pianello Trail Run
              </h4>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer justify="center">
            <GridItem xs={4} sm={4} md={2} style={{ marginTop: "10px" }}>
              <h3 className={classes.description}>Ore 19.00</h3>
            </GridItem>
            <GridItem xs={4} sm={4} md={4}>
              <h3 className={classes.title}>TENSOSTRUTTURA</h3>
              <h4 className={classes.description}>
                Apertura stand gastronomico
              </h4>
              <h4 className={classes.description}>
                Primi piatti, carne alla griglia, contorni e bruschette{" "}
              </h4>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer justify="center">
            <GridItem xs={4} sm={4} md={2} style={{ marginTop: "10px" }}>
              <h3 className={classes.description}>Ore 20.30</h3>
            </GridItem>
            <GridItem xs={4} sm={4} md={4}>
              <h3 className={classes.title} style={{ marginBottom: "0px" }}>
                TENSOSTRUTTURA
              </h3>
              <h3 className={classes.title} style={{ marginTop: "0px" }}>
                TRIFISA
              </h3>
              <h4 className={classes.description}>Serata danzante</h4>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <h5 className={classes.description}>
            In caso di maltempo o altre situazioni che non consentano lo
            svolgimento in sicurezza della manifestazione, il comitato
            organizzatore si riserva di posticipare o annullare la gara. In caso
            di annullamento della gara per condizioni meteo avverse o per altre
            motivazioni indipendenti alla volontà degli organizzatori, ogni
            concorrente sarà automaticamente iscritto all'edizione 2026. In
            nessun caso la quota verrà resa e per nessun modo potrà essere fatta
            rivalsa sul comitato organizzatore e sulla società organizzatrice.
          </h5>
          <Button
            href="/contacts"
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: "20px", marginTop: "20px" }}
          >
            CONTATTACI
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
