
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{background: "#95c11e"}}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>1 GIUGNO 2025</h2>
          <img
            alt="logo trailrun"
            src={"/img/pianello/logocolorrun.png"}
            style={{ height: "460px" }}
          />
          <h3 className={classes.description}>
            VALSUGANA COLOR RUN EDIZIONE CRAZY
          </h3>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Button
              href="/"
              color="transparent"
              className={classes.navLink}
            >
              ISCRIVITI
            </Button>
            <Button
              href="/valsuganaColor"
              color="transparent"
              className={classes.navLink}
            >
              PROGRAMMA
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
