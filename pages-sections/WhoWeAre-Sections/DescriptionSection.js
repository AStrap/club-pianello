// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import Carousel from "react-slick";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
    <GridContainer>
        <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
          <Card carousel>
            <Carousel {...settings} style={{ height: "757px" }}>
              <div>
                <img
                  src="/img/pianello/whoweare1.png"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare2.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare3.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare4.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare5.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare6.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare7.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare8.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare9.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare10.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare11.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare12.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare13.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare14.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare15.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare16.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare17.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
              <div>
                <img
                  src="/img/pianello/whoweare18.jpeg"
                  alt=""
                  className="slick-image"
                  style={{ height: "757px" }}
                />
              </div>
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description}>ASSOCIAZIONE</h4>
          <h1 className={classes.title}>CLUB PIANELLO</h1>
          <h3 className={classes.title}>...eravamo quattro amici al bar</h3>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description}>"Eravamo quattro amici al bar”. È proprio così! La nascita ufficiale del Club Pianello risale alla primavera del 1977, dove un gruppo di amici, per lo più coetanei si trova presso l’unico bar della zona e poiché partecipa in modo costante alle marce podistiche con il nome “I Pelandroni”, scaturisce tra loro l’idea di organizzare una propria corsa, e per coprire le spese, oltre a versare una cospicua somma a titolo di spese iniziali, decide in fretta e furia di organizzare anche delle serate danzanti. La data prescelta viene fatta coincidere per fine maggio con la festa dedicata a S.M. Ausiliatrice, patrona della Chiesetta di Martincelli da pochi anni costruita. </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description}> 
          Primo presidente del Club Pianello viene eletto Silvano Fante. E così il 29 maggio 1977, favoriti da una splendida giornata prendono il via i 380 atleti per percorrere i 13 km. della 1^ “Su e do par el Masaron” (è la strada secondaria che da Pianello porta a Tezze). L’anno successivo si raggiunge il record d’iscritti per quanto concerne la formula competitiva della marcia e più precisamente 554. Vengono premiati un po’ tutti: i primi classificati ma anche l’ultimo, i podisti più giovani ma anche quelli più anziani, i più distanti, i più folcloristici, i gruppi più numerosi e gli atleti più sfortunati. Nel 1979 gli iscritti scendono al di sotto dei 300. Come altri eventi sportivi amatoriali anche la corsa a piedi dopo l’euforia iniziale subisce un brusco ridimensionamento (perlomeno in Trentino) e così il Club Pianello accresce il proprio calendario; in febbraio ha luogo la prima maccheronata, poi di seguito furono organizzate delle gare di Briscola, di Pesca e la Castagnata a fine autunno. Nel 1980 i tesserati sono più di cento, s’inizia a redigere il verbale e ad acquistare la propria attrezzatura. Il 1981 rappresenta l’anno peggiore della pur breve vita del Club. Oltre al record negativo degli iscritti alla gara (108 concorrenti) giunge improvvisa e dolorosa la tragica scomparsa del Presidente Silvano Fante. Lo sconforto è forte anche perché associato con altri eventi tragici che colpiscono il paese di Tezze. Ma la compattezza del gruppo è ancora valida e la gente disposta a collaborare, ancora molta. Nuovo presidente viene eletto Palma Attilio, che rimane in carica fino al 1983. Successivamente subentra Reguzzo Giorgio, ma la marcia da sempre meno soddisfazioni in termini di partecipazione e così il Club Pianello decide di iscriverla al calendario nazionale delle marce non competitive. Si perde quindi il tradizionale agonismo (i podisti partivano tutti assieme) ma in compenso si hanno un numero di iscritti piuttosto elevati: 530 nel 1986, 610 nell’87 e così via sempre di più fino a superare nel 1993 le 1.000 unità. Con l’anniversario del 10° anno, le serate danzanti da due salgono a quattro (anche se il maltempo spesso ne fa saltare qualcuna), viene istituita nella giornata del 6 gennaio la “Festa dell’Anziano” con la distribuzione di pacchi dono agli ultra settantenni. Lentamente in modo sobrio ed elegante, viene completata la sede del Club, così, oltre che da magazzino può finalmente fungere da luogo naturale d’incontro sia per il direttivo che per tutta la popolazione. Terminato il mandato di Giorgio Reguzzo viene rieletto ancora Attilio Palma, l’ideatore dell’associazione. Successivamente sono susseguiti Stefano Fante, Leonardo Dell’Agnolo e dal 2011 per la prima volta la poltrona passa ad una donna Sandra Montibeller, che ad oggi è ancora l’attuale Presidente!
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description}> 
          Tradizionale è diventato il Pranzo delle Contrade, che vede per lo meno in quel giorno il rimpatrio di molti ex abitanti e molto apprezzati sono gli ormai famosi fuochi d’artificio (idea avuta da Attilio Palma). 
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
