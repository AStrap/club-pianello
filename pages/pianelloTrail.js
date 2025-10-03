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
import DescriptionSection from "/pages-sections/PianelloTrail-Sections/DescriptionSection.js";
import IscriptionSection from "/pages-sections/PianelloTrail-Sections/IscriptionSection.js";
import RuleSection from "/pages-sections/PianelloTrail-Sections/RuleSection.js";
import ScheduleSection from "/pages-sections/PianelloTrail-Sections/ScheduleSection.js";
import GallerySection from "/pages-sections/PianelloTrail-Sections/GallerySection.js";

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
          height: 50,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        filter
        responsive
        image="/img/pianello/banner.png"
        style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      >
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
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ margin: "0px 30px", top: "100px" }}
      >
        <div style={{ background: "#e44051", borderRadius: "6px" }}>
          <DescriptionSection />
          <IscriptionSection />
          <RuleSection />
          <ScheduleSection />
          <GallerySection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
