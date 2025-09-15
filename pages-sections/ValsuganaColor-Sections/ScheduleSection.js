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
          <h2 className={classes.title}>DOMENICA 01 GIUGNO 2025</h2>
          <h4 className={classes.description}>Color Run Day!</h4>
          <h3 className={classes.title}>Ore 13.30 ESTERNO TENSOSTRUTTURA</h3>
          <h3 className={classes.description}>Accreditamento del Race Kit*</h3>
          <h3 className={classes.description}>
            Apertura Area Bimbi (con gonfiabili)
          </h3>
          <h3 className={classes.title}>Ore 16.00 ESTERNO TENSOSTRUTTURA</h3>
          <h3 className={classes.description}>Partenza animata con Zumba</h3>
          <h3 className={classes.title}>Ore 18.00 TENSOSTRUTTURA </h3>
          <h3 className={classes.description}>Aperycrazy</h3>
          <h4 className={classes.description}>arrosticini patatine e birra</h4>
          <h3 className={classes.title}>Ore 19.00 TENSOSTRUTTURA</h3>
          <h3 className={classes.description}>Apertura stand gastronomico</h3>
          <h3 className={classes.description}>Panini onti e bruschette</h3>
          <h3 className={classes.title}>Ore 21.00 TENSOSTRUTTURA</h3>
          <h3 className={classes.description}>RIVIDA</h3>
          <h3 className={classes.description}>DJ SET</h3>
          <img
            alt="logo trailrun"
            src={"/img/pianello/logorivida.png"}
            style={{ height: "150px" }}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
