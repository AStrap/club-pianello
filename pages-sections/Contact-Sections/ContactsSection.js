// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>CONTATTI</h2>
          <h4 className={classes.description} style={{ marginBottom: "0" }}>
            Per qualsiasi dubbio, richiesto o semplice informazione non esitare
            a contattarci tramite uno dei vari canali
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" style={{marginTop:"40px"}}>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer >
        <GridItem xs={12} sm={12} md={4}>
          <a href="https://www.instagram.com/club_pianello/"><InfoArea
            title="INSTAGRAM"
            description=""
            img="/img/pianello/instagram.png"
            vertical
          />
          </a>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <a href="https://www.facebook.com/clubpianello/"><InfoArea
            title="FACEBOOK"
            description=""
            img="/img/pianello/facebook.png"
            vertical
          /></a>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <a href="mailto:social.clubpianello@libero.it?subject=Richiesta informazioni"><InfoArea
            title="EMAIL"
            description=""
            img="/img/pianello/email.png"
            vertical
          /></a>
        </GridItem>
        </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
