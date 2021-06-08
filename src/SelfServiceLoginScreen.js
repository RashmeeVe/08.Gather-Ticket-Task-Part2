import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import SelfServiceLoginScreenLeftPane from "./SelfServiceLoginScreenLeftPane";
import SelfServiceLoginScreenRightPane from "./SelfServiceLoginScreenRightPane";
import styles from "./MyStyles";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import "./SlidingFunction.css";

class SelfServiceLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1,
      isPreviousStep: false,
      showPassword: false,
      selfServiceLoginStep4: false,
      fname: "",
    };
  }

  handleClickShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
  };

  nextStep = (number, e) => {
    this.setState({ activeStep: number, isPreviousStep: false });
  };

  previousStep = (number, e) => {
    this.setState({ activeStep: number, isPreviousStep: true });
  };

  createMySecureAccount = () => {
    const { selfServiceLoginStep4 } = this.state;
    const selfServiceLoginStep4Status = selfServiceLoginStep4 ? false : true;
    this.setState({
      selfServiceLoginStep4: selfServiceLoginStep4Status,
    });
  };

  render() {
    const fnameOfTheDeceased = "John";
    const lnameOfTheDeceased = "Doe";
    const nameOfTheDeceased = `${fnameOfTheDeceased} ${lnameOfTheDeceased}`;
    const { classes, fullScreen } = this.props;
    const { isPreviousStep, showPassword, selfServiceLoginStep4 } = this.state;
    const number = this.state.activeStep ? this.state.activeStep : 1;

    const newClassName = isPreviousStep ? "slide-back" : "slide";

    return (
      // <div>
      <Dialog
        fullScreen={fullScreen}
        open={this.props.isDialogBoxOpen}
        onClose={this.props.handleClose}
        aria-labelledby="responsive-dialog-title"
        // maxWidth="800px"
        // maxheight="600px"
        maxWidth="lg"
        maxheight="lg"
      >
        <div className={classes.selfServiceLoginScreenOuterDiv}>
          <Grid container className={classes.selfServiceLoginScreen}>
            <Grid item className={classes.selfServiceLoginScreenLeftPane}>
              <SelfServiceLoginScreenLeftPane
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                selfServiceLoginStep4={selfServiceLoginStep4}
                createMySecureAccount={this.createMySecureAccount}
                showPassword={showPassword}
                stepNumber={number}
                className={newClassName}
                fnameOfTheDeceased={fnameOfTheDeceased}
                handleClickShowPassword={this.handleClickShowPassword}
              />
            </Grid>
            <Grid item className={classes.selfServiceLoginScreenRightPane}>
              <SelfServiceLoginScreenRightPane
                handleClose={this.props.handleClose}
                nameOfTheDeceased={nameOfTheDeceased}
              />
            </Grid>
          </Grid>
        </div>
      </Dialog>
      // </div>
    );
  }
}

SelfServiceLoginScreen.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(
  withMobileDialog({ breakpoint: "xs" })(SelfServiceLoginScreen)
);
