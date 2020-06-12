import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

// turn into the signup section --> button for signup, button for apply (both link to same form)

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Make a difference</h2>
          <h4 className={classes.description}>
            Each class has a $10 registration fee. Profits will be donated to Black Girls Code (blackgirlscode.com).
          </h4>
          <h4 className={classes.description}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10}>
                <Button 
                  color="primary"
                  size="lg"
                  href= "https://airtable.com/shriPqu1rYhyqC7pN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign Up
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={10}>
                <Button 
                  color="primary"
                  size="lg"
                  href= "https://airtable.com/shriPqu1rYhyqC7pN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for financial aid
                </Button>
              </GridItem>
            </GridContainer>
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
