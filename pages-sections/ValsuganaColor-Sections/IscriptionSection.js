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
          <h3 className={classes.title}>I BIGLIETTI</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="15.00 €"
                description="Adulti (+ 11 anni)"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="10.00 €"
                description="Ragazzi (4 - 10 anni)"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="5.00 €"
                description="Bambini (0 - 3 anni)"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Formula Gruppo"
                description="Acquistando 10 biglietti, l'undicesimo sarà in omaggio"
                vertical
              />
            </GridItem>
          </GridContainer>
          <h3 className={classes.title}>RACE KIT IN REGALO!</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea title="T-Shirt" description="" vertical />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea title="Sacca" description="" vertical />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea title="Occhiali da sole" description="" vertical />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea title="Cappellino" description="" vertical />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea title="Braccialetto" description="" vertical />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <InfoArea title="Palloncino" description="" vertical />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>
            Fatta salva la disponibilità di posti, sarà possibile iscriversi
            anche in loco fino alle ore 15.00 il giorno della manifestazione.
          </h5>
          <h5 className={classes.title}>
            Alle iscrizioni effettuate nei giorni 30-31 maggio e 1 giugno verrà
            applicato un sovrapprezzo di 5€.
          </h5>
          <h5 className={classes.description}>
            Per l'iscrizione in loco durante il giorno della manifestazione,
            sarà accettato soltanto il pagamento in contanti.{" "}
          </h5>
          <h5 className={classes.title}>
            Iscrizioni fino ad esaurimento posti.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>
            Sarà possibile ritirare il race kit il giorno della gara presso la
            tensostruttura - punto di partenza in loc. Pianello
          </h5>
          <h5 className={classes.title}>
            dalle ore 13.00 alle ore 15.30 del 01 giugno 2025 e dalle ore 13:30
            alle ore 15:30 del 31 maggio 2025 in occasione della Pianello Trail
            Run sempre presso la tensostruttura in loc. Pianello.{" "}
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>
            *Per i minori si prega di arrivare muniti di “liberatoria minorenni”
            con firma in originale
          </h5>
          <h4 className={classes.description}>DOCUMENTI</h4>
          <h5 className={classes.title}>
            La Valsugana Color Run avrà luogo in qualsiasi condizione
            meteorologica, purché non vi siano pericoli per i partecipanti.
          </h5>
          <h4 className={classes.description}>REGOLAMENTO</h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
