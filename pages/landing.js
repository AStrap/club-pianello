import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import TrailRunSection from "/pages-sections/LandingPage-Sections/TrailRunSection.js";
import ColorRunSection from "/pages-sections/LandingPage-Sections/ColorRunSection.js";
import TraditionalSection from "/pages-sections/LandingPage-Sections/TraditionalSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div style={{ backgroundColor: "#04111e" }}>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 320,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/pianello/banner.png">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <img
                alt="banner Testo"
                src="/img/pianello/bannerText.png"
                className={imageClasses}
                style={{ width: "100%" }}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <TrailRunSection />
          <ColorRunSection />
          <TraditionalSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
