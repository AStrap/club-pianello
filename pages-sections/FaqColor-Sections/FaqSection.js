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
        <GridItem xs={12} sm={12} md={9}>
          <h2 className={classes.title}>FAQ</h2>
          <h4 className={classes.description}>
            <a
              href="/faqColor"
              style={{ color: "black", textDecoration: "inherit" }}
            >
              Posso partecipare senza iscrizione?
            </a>
          </h4>
          <h4 className={classes.description}>
            <a
              href="/faqColor"
              style={{ color: "black", textDecoration: "inherit" }}
            >
              Cosa mi viene dato in seguito all’iscrizione?
            </a>
          </h4>
          <h4 className={classes.description}>
            <a
              href="/faqColor"
              style={{ color: "black", textDecoration: "inherit" }}
            >
              Dove posso ritirare il mio pacco gara?
            </a>
          </h4>
          <h4 className={classes.description}>
            <a
              href="/faqColor"
              style={{ color: "black", textDecoration: "inherit" }}
            >
              I colori sono dannosi per me o i vestiti?
            </a>
          </h4>
          <h4 className={classes.description}>
            <a
              href="/faqColor"
              style={{ color: "black", textDecoration: "inherit" }}
            >
              Esiste un limite di età per essere un color runner?
            </a>
          </h4>
          <h4 className={classes.description}>
            <a
              href="/faqColor"
              style={{ color: "black", textDecoration: "inherit" }}
            >
              È possibile essere rimborsati?
            </a>
          </h4>
          <h4 className={classes.description}>
            <a
              href="/faqColor"
              style={{ color: "black", textDecoration: "inherit" }}
            >
              Ho altri dubbi a chi posso rivolgermi?
            </a>
          </h4>
          <h4 className={classes.description}>
            <a
              href="/faqColor"
              style={{ color: "black", textDecoration: "inherit" }}
            >
              Posso spingere un passeggino lungo il percorso?
            </a>
          </h4>
          <h4 className={classes.description}>
            <a
              href="/faqColor"
              style={{ color: "black", textDecoration: "inherit" }}
            >
              È possibile trasferire la mia iscrizione ad altra persona?
            </a>
          </h4>
          <h4 className={classes.description}>
            <a
              href="/faqColor"
              style={{ color: "black", textDecoration: "inherit" }}
            >
              Devo produrre dei documenti particolari per iscrivermi?
            </a>
          </h4>
          <h4 className={classes.description}>
            <a
              href="/faqColor"
              style={{ color: "black", textDecoration: "inherit" }}
            >
              Devo essere un corridore professionista per partecipare?
            </a>
          </h4>
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
