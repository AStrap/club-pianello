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
    <div className={classes.section} style={{ backgroundColor: "#b4df3cff" }}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>I BIGLIETTI</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="15.00 €"
                description="Adulti (+ 11 anni)"
                img="/img/pianello/adulto.png"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="10.00 €"
                description="Ragazzi (4 - 10 anni)"
                img="/img/pianello/boy.png"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="5.00 €"
                description="Bambini (0 - 3 anni)"
                img="/img/pianello/baby.png"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Formula Gruppo"
                description="Acquistando 10 biglietti, l'undicesimo sarà in omaggio"
                img="/img/pianello/group.png"
                vertical
              />
            </GridItem>
          </GridContainer>
          <h3 className={classes.title}>RACE KIT IN REGALO!</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea
                title="T-Shirt"
                description=""
                img="/img/pianello/tshirt.png"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea
                title="Sacca"
                description=""
                img="/img/pianello/sacca.png"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea
                title="Occhiali da sole"
                description=""
                img="/img/pianello/glasses.png"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea
                title="Cappellino"
                description=""
                img="/img/pianello/hat.png"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea
                title="Braccialetto"
                description=""
                img="/img/pianello/braccialetto.png"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea
                title="Palloncino"
                description=""
                img="/img/pianello/ballon.png"
                vertical
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={7}>
          <h5 className={classes.description} style={{ marginTop: "20px" }}>
            Fatta salva la disponibilità di posti, sarà possibile iscriversi
            anche in loco fino alle ore 15.00 il giorno della manifestazione.
          </h5>
          <h5 className={classes.description} style={{ margin: "0" }}>
            Alle iscrizioni effettuate nei giorni 30-31 maggio e 1 giugno verrà
            applicato un sovrapprezzo di 5€.
          </h5>
          <h5 className={classes.description} style={{ margin: "0" }}>
            Per l'iscrizione in loco durante il giorno della manifestazione,
            sarà accettato soltanto il pagamento in contanti.
          </h5>
          <h5 className={classes.description} style={{ margin: "0" }}>
            Iscrizioni fino ad esaurimento posti.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" style={{ marginTop: "20px" }}>
        <GridItem xs={12} sm={12} md={7}>
          <h5 className={classes.description}>
            Sarà possibile ritirare il race kit il giorno della gara presso la
            tensostruttura - punto di partenza in loc. Pianello dalle ore 13.00
            alle ore 15.30 del 01 giugno 2025 e dalle ore 13:30 alle ore 15:30
            del 31 maggio 2025 in occasione della Pianello Trail Run sempre
            presso la tensostruttura in loc. Pianello.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>
            CONSULTA IL REGOLAMENTO PER AVERE INFO DETTAGLIATE
          </h3>
          <h4 className={classes.description}>
            Per i minori si prega di arrivare muniti di “liberatoria minorenni”
            con firma in originale
          </h4>
          <Button
            href="/documentColor"
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: "20px", marginTop: "20px" }}
          >
            LIBERATORIA
          </Button>
          <Button
            href="/ruleColor"
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: "20px", marginTop: "20px" }}
          >
            REGOLAMENTO
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
