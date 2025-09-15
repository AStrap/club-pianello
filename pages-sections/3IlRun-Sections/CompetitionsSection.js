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
          <img
            alt="logo piovega"
            src={"/img/pianello/piovega.png"}
            style={{ width: "100%" }}
          />
          <h3 className={classes.title}>27.04.2025</h3>
          <h3 className={classes.description}>CRONOSCALATA PIOVEGA</h3>
          <h3 className={classes.description}>II Ed. - 2,5K D+ 400</h3>
          <h3 className={classes.title}>INFO </h3>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <img
            alt="logo cesare"
            src={"/img/pianello/cesare.png"}
            style={{ width: "100%" }}
          />
          <h3 className={classes.title}>25.05.2025</h3>
          <h3 className={classes.description}>DON CESARE TRAIL</h3>
          <h3 className={classes.description}>
            III Ed. - 10K D+ 400 / - 25K D+ 1.500{" "}
          </h3>
          <h3 className={classes.title}>INFO </h3>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <img
            alt="logo pianello trail run"
            src={"/img/pianello/logotrailrun.png"}
            style={{ width: "70%" }}
          />
          <h3 className={classes.title}>31.05.2025 </h3>
          <h3 className={classes.description}>PIANELLO TRAIL RUN</h3>
          <h3 className={classes.description}>II Ed. - 10K D+ 400 </h3>
          <h3 className={classes.title}>INFO </h3>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <InfoArea title="ASSOCIAZIONE CLUB PIANELLO" description="" vertical />
            <img
            alt="logo pianello trail run"
            src={"/img/pianello/logopianellobl.png"}
            style={{ width: "70%" }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <InfoArea title="PRO LOCO BORGO VALSUGANA" description="" vertical />
            <img
            alt="logo pro loco borgo"
            src={"/img/pianello/prolocoborgo.png"}
            style={{ width: "70%" }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <InfoArea title="ENDURANCE TEAM" description="" vertical />
            <img
            alt="logo endurance"
            src={"/img/pianello/endurancelogo.png"}
            style={{ width: "70%", height: "200px" }}
          />
        </GridItem>
    </GridContainer>
    </div>
  );
}
