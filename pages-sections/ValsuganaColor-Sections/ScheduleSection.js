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
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title} style={{ marginTop: "0" }}>
            DOMENICA 01 GIUGNO 2025
          </h2>
          <h4 className={classes.description} style={{ marginTop: "0" }}>
            Color Run Day!
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
                Accreditamento del Race Kit*
              </h4>
              <h4 className={classes.description}>
                Apertura Area Bimbi (con gonfiabili)
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
                Partenza animata con Zumba
              </h4>
              <img
                alt="logo trailrun"
                src={"/img/pianello/crew.png"}
                style={{ height: "70px" }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer justify="center">
            <GridItem xs={4} sm={4} md={2} style={{ marginTop: "10px" }}>
              <h3 className={classes.description}>Ore 18.00</h3>
            </GridItem>
            <GridItem xs={4} sm={4} md={4}>
              <h3 className={classes.title}>TENSOSTRUTTURA</h3>
              <h4 className={classes.description}>Aperycrazy</h4>
              <h4 className={classes.description}>
                arrosticini patatine e birra
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
              <h4 className={classes.description}>Panini onti e bruschette</h4>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer justify="center">
            <GridItem xs={4} sm={4} md={2} style={{ marginTop: "10px" }}>
              <h3 className={classes.description}>Ore 21.00</h3>
            </GridItem>
            <GridItem xs={4} sm={4} md={4}>
              <h3 className={classes.title}>TENSOSTRUTTURA</h3>
              <h4 className={classes.description}>DJ SET - RIVIDA</h4>
              <img
                alt="logo trailrun"
                src={"/img/pianello/logorivida.png"}
                style={{ height: "120px" }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
