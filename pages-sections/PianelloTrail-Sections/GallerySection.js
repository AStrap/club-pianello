// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Carousel from "react-slick";

import LocationOn from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";

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
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.title}>Alcuni passaggi suggestivi Pianello Trail Run</h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings} style={{height: "757px"}}>
                <div>
                  <img
                    src="/img/pianello/01 chiesa pianello.png"
                    alt="chiesa pianello"
                    className="slick-image"
                    style={{height: "757px"}}
                />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons"/>
                      Chiesa di Pianello
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/pianello/02 scale di primolano.png"
                    alt="scale di primolano"
                    className="slick-image"
                    style={{height: "757px"}}
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Scala di Primolano
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/pianello/03 forte tagliata della scala.png"
                    alt="entrata forte tagliata della scala"
                    className="slick-image"
                    style={{height: "757px"}}
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Entrata forte 'tagliata della scala' di Primolano
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/pianello/04 forte tagliata della scala.png"
                    alt="interno forte tagliata della scala"
                    className="slick-image"
                    style={{height: "757px"}}
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Interno forte 'tagliata della scala' di Primolano
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/pianello/05 maso calchèra san giorgio.png"
                    alt="maso calchèra san giorgio"
                    className="slick-image"
                    style={{height: "757px"}}
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Maso calchèra San Giorgio
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/pianello/06 calchera.png"
                    alt="calchèra"
                    className="slick-image"
                    style={{height: "757px"}}
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Vista frontale calchèra
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
    </div>
  );
}
