// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.section} style={{ backgroundColor: "#e65e6cff" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.description}>CRONOSCALATA PIOVEGA</h2>
            <h3 className={classes.title} style={{ margin: "0px" }}>
              27.04.2025
            </h3>
            <h3 className={classes.description} style={{ margin: "0px" }}>
              II Ed. - 2,5K D+ 400
            </h3>
            <Button
              href="https://m.facebook.com/enduranceteam/"
              color="transparent"
              className={classes.navLink}
              style={{ fontSize: "20px", marginBottom: "20px" }}
            >
              INFO
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <img
              alt="logo piovega"
              src={"/img/pianello/piovega.png"}
              style={{ width: "90%" }}
            />
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.description}>DON CESARE TRAIL</h2>
            <h3 className={classes.title} style={{ margin: "0px" }}>
              25.05.2025
            </h3>
            <h3 className={classes.description} style={{ margin: "0px" }}>
              III Ed. - 10K D+ 400 / - 25K D+ 1.500
            </h3>
            <Button
              href="https://www.doncesaretrail.it/"
              color="transparent"
              className={classes.navLink}
              style={{ fontSize: "20px", marginBottom: "20px" }}
            >
              INFO
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <img
              alt="logo cesare"
              src={"/img/pianello/cesare.png"}
              style={{ width: "90%" }}
            />
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.section} style={{ backgroundColor: "#e65e6cff" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.description}>PIANELLO TRAIL RUN</h2>
            <h3 className={classes.title} style={{ margin: "0px" }}>
              31.05.2025
            </h3>
            <h3 className={classes.description} style={{ margin: "0px" }}>
              II Ed. - 10K D+ 400
            </h3>
            <Button
              href="/pianelloTrail"
              color="transparent"
              className={classes.navLink}
              style={{ fontSize: "20px", marginBottom: "20px" }}
            >
              INFO
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <img
              alt="logo pianello trail run"
              src={"/img/pianello/logotrailrun.png"}
              style={{ width: "40%" }}
            />
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h2 className={classes.description}>EVENTI REALIZZATI DA:</h2>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="ASSOCIAZIONE CLUB PIANELLO"
              description=""
              vertical
            />
            <img
              alt="logo pianello trail run"
              src={"/img/pianello/logopianellobl.png"}
              style={{ width: "50%" }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="PRO LOCO BORGO VALSUGANA"
              description=""
              vertical
            />
            <img
              alt="logo pro loco borgo"
              src={"/img/pianello/prolocoborgo.png"}
              style={{ width: "50%" }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea title="ENDURANCE TEAM" description="" vertical />
            <img
              alt="logo endurance"
              src={"/img/pianello/endurancelogo.png"}
              style={{ width: "100%", height: "200px" }}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
