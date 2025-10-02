import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  // Stato per salvare i campi del form
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Genera href mailto dinamico
  const mailtoHref = `mailto:social.clubpianello@libero.it?subject=Richiesta informazioni da ${encodeURIComponent(
    form.name
  )}&body= ${encodeURIComponent(form.message)}`;

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Hai bisogno di informazioni?</h2>
          <h4 className={classes.description}>
            Scrivi una mail sui dubbi che hai
          </h4>
          <form>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10}>
                <CustomInput
                  labelText="Nome"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: form.name,
                    onChange: (e) => setForm({ ...form, name: e.target.value }),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={10} style={{ marginTop: "15px" }}>
                <CustomInput
                  labelText="Messaggio"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea,
                  }}
                  inputProps={{
                    multiline: true,
                    value: form.message,
                    onChange: (e) =>
                      setForm({ ...form, message: e.target.value }),
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer justify="center" style={{ marginTop: "30px" }}>
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button href={mailtoHref} color="primary">
                  invia
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
