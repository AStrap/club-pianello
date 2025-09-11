// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>CONSULTA IL REGOLAMENTO PER AVERE INFO DETTAGLIATE</h2>
          <h3 className={classes.description}>DOCUMENTI</h3>
          <h3 className={classes.description}>REGOLAMENTO</h3>
          <h3 className={classes.description}>ISCRIVITI</h3>
        </GridItem>
      </GridContainer>
    </div>
  );
}
