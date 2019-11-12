import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>About Me</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            I am an effective full-stack developer with a strong skill set
            enabling me to build progressive web apps and dynamic websites. I
            have experience working on diverse teams of engineers, pair
            programming, debugging code and providing creative solutions to
            challenging problems. I am an entrepreneur at heart with an owner’s
            mentality and I am determined to add value to the teams I am lucky
            enough to be a part of.
            <br />I have experience building and maintaining applications with:
            HTML5, CSS3, JavaScript(ES6), React, Node.js, Express, Bootstrap,
            Material-UI, UI-Kit, SCSS, Handlebars, EJS, jQuery, Ajax, RESTful
            APIs, Google Firebase, Auth/OAuth, MongoDB/Mongoose, MySQL,
            PostgreSQL, Heroku, Git, Babel, Webpack, Yarn, NPM
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
