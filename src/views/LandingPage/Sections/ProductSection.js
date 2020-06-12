import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Classes</h2>
          <h5 className={classes.description}>
            We'll be offering 1-2 hour classes on the weekends over Zoom.
            Here are some example topics.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Reinforcement Learning"
              description="Walk away from this class with a reinforcement learning agent capable of solving OpenAI Gym environments."
              icon={DeveloperBoardIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Web App Development"
              description="Build your own web app with Flask and Jinja."
              icon={ImportantDevicesIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Technical Interview Prep"
              description="Gain the confidence and skills to ace the interview for the software job of your dreams."
              icon={DeveloperModeIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
