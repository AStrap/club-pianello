// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/pianelloTrail"
          color="transparent"
          className={classes.navLink}
        >
          PIANELLO TRAIL RUN
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/valsuganaColor"
          color="transparent"
          className={classes.navLink}
        >
          VALSUGANA COLOR RUN
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/3IlRun" color="transparent" className={classes.navLink}>
          3IL RUN
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/whoWeAre"
          color="transparent"
          className={classes.navLink}
        >
          CHI SIAMO
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/sponsor" color="transparent" className={classes.navLink}>
          SPONSOR
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/faqColor"
          color="transparent"
          className={classes.navLink}
        >
          FAQ COLOR
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/contacts"
          color="transparent"
          className={classes.navLink}
        >
          CONTATTI
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Seguici su facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/clubpianello/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Seguici su instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/club_pianello/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
