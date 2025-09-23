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
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>
            CONSULTA IL REGOLAMENTO PER AVERE INFO DETTAGLIATE
          </h3>
          <Button
            href="/documentTrail"
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: "20px", marginTop: "20px" }}
          >
            DOCUMENTI
          </Button>
          <Button
            href="/ruleTrail"
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: "20px", marginTop: "20px" }}
          >
            REGOLAMENTO
          </Button>
          <Button
            href="https://www.visitvalsugana.it/it/landing-esperienze/#/esperienze/TRN/8e531b71-82dc-4dcb-b862-481ce2e314d8/pianello-vertical-run---25-maggio-2024"
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: "20px", marginTop: "20px" }}
          >
            ISCRIVITI
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
