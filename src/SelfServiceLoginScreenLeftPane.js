import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styles from "./MyStyles";
import { withStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import * as classNames from "classnames";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import BusinessIcon from "@material-ui/icons/Business";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const step1 = (props) => {
  const { classes, stepNumber } = props;
  const companyLogo = "https://www.iotasol.com/site/images/logo.svg";
  return (
    <div className={classes.LeftPaneStepOuterDiv}>
      <div className={classes.logoAndBackButtonDiv}>
        {companyLogo && (
          <img
            alt="Company Logo"
            src={companyLogo}
            className={classes.companyLogo}
          />
        )}
      </div>

      <div className={classes.greetingsAndFormDiv}>
        <Typography>Hello.</Typography>
        <Typography className={classes.greetingsText}>
          What's your name?
        </Typography>
        <div className={classes.formDiv}>
          <TextField
            id="fname"
            name="fname"
            className={classes.textFields}
            placeholder="First Name"
            onChange={props.handleFormEntries}
          />
          <TextField
            id="lname"
            name="lname"
            className={classes.textFields}
            placeholder="Last Name"
            onChange={props.handleFormEntries}
          />
        </div>
      </div>
      <div className={classes.submitFormDiv}>
        <Button
          variant="contained"
          color="primary"
          className={classes.continueButton}
          onClick={() => props.nextStep(stepNumber)}
        >
          Continue
        </Button>
        <Typography className={classes.alreadyHaveAccountText}>
          Already have an account?{" "}
          <span
            className={classes.loginNowText}
            onClick={() => props.loginNow()}
          >
            Log in now
          </span>
        </Typography>
      </div>
    </div>
  );
};

const step2 = (props) => {
  const { stepNumber, classes, fname, fnameOfTheDeceased } = props;

  return (
    <div className={classes.LeftPaneStepOuterDiv}>
      <div className={classes.logoAndBackButtonDiv}>
        <ArrowBackIosIcon
          className={classes.backButton}
          onClick={() => props.previousStep(stepNumber)}
        />
      </div>

      <div className={classes.greetingsAndFormDiv}>
        <Typography>Hi, {fname}!</Typography>
        <Typography className={classes.greetingsText}>
          How do you know {fnameOfTheDeceased} ?
        </Typography>
        <div className={classes.formDiv}>
          <div className={classes.step2FormDiv}>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <PeopleIcon className={classes.relationWithDeceasedIcon} />
                <br />
                Family
              </p>
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <EmojiPeopleIcon className={classes.relationWithDeceasedIcon} />
                <br />
                Friend
              </p>
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <SchoolIcon className={classes.relationWithDeceasedIcon} />
                <br />
                School
              </p>
            </Button>
            {/* <br /> */}
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <BusinessIcon className={classes.relationWithDeceasedIcon} />
                <br />
                Work
              </p>
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <MenuBookIcon className={classes.relationWithDeceasedIcon} />
                <br />
                Church
              </p>
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <PersonIcon className={classes.relationWithDeceasedIcon} />
                <br />
                Other
              </p>
            </Button>
          </div>
          <br />
          <TextField
            id="relationWithDeceased"
            name="relationWithDeceased"
            label="I am John's..."
            className={classes.relationWithDeceased}
            variant="outlined"
          />
        </div>
      </div>
      <div className={classes.submitFormDiv}>
        <Button
          variant="contained"
          color="primary"
          className={classes.continueButton}
          onClick={() => props.nextStep(stepNumber)}
        >
          Continue
        </Button>
        <Typography className={classes.alreadyHaveAccountText}>
          Already have an account?{" "}
          <span
            className={classes.loginNowText}
            onClick={() => props.loginNow()}
          >
            Log in now
          </span>
        </Typography>
      </div>
    </div>
  );
};

const step3 = (props) => {
  const { stepNumber, classes, showPassword } = props;

  return (
    <div className={classes.LeftPaneStepOuterDiv}>
      <div className={classes.logoAndBackButtonDiv}>
        <ArrowBackIosIcon
          className={classes.backButton}
          onClick={() => props.previousStep(stepNumber)}
        />
      </div>

      <div className={classes.greetingsAndFormDiv}>
        <Typography>And finally,</Typography>
        <Typography className={classes.greetingsText}>
          Create your free account.
        </Typography>
        <div className={classes.formDiv}>
          <Input
            id="emailOrMobile"
            placeholder="Email or Mobile Number"
            className={classes.textFields}
          />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a Password"
            className={classes.textFields}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={props.handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </div>
      <div className={classes.submitFormDiv}>
        <Button
          variant="contained"
          color="primary"
          className={classes.continueButton}
          onClick={props.createMySecureAccount}
        >
          <LockIcon />
          CREATE MY SECURE ACCOUNT
        </Button>

        <Typography className={classes.termsAndPoliciesText}>
          By Continuing, you agree to our
          <span className={classes.boldText}> terms & conditions</span>
          <br />
          and that you have read our
          <span className={classes.boldText}> privacy policy</span>
        </Typography>
      </div>
    </div>
  );
};

const loginNow = (props) => {
  const { classes, showPassword } = props;

  return (
    <CSSTransition
      in={true}
      timeout={1000}
      classNames="slide"
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.LeftPaneStepOuterDiv}>
        <div className={classes.logoAndBackButtonDiv}>
          <ArrowBackIosIcon
            className={classes.backButton}
            onClick={() => props.loginNow()}
          />
        </div>

        <div className={classes.greetingsAndFormDiv}>
          <Typography>Welcome back!</Typography>
          <Typography className={classes.greetingsText}>
            Please log in to continue
          </Typography>
          <div className={classes.formDiv}>
            <div className={classes.loginScreenTextBoxDiv}>
              <ComputerOutlinedIcon
                className={classes.loginScreenTextFieldIcons}
              />{" "}
              <Input
                id="emailOrMobile"
                placeholder="Your Email or Mobile number"
                className={classes.textFieldsLoginForm}
              />
            </div>

            <div className={classes.loginScreenTextBoxDiv}>
              <LockIcon className={classes.loginScreenTextFieldIcons} />{" "}
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your Existing Password"
                className={classes.textFieldsLoginForm}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={props.handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>

            <div className={classes.forgotPasswordAndLoginDiv}>
              <div className={classes.forgotPasswordDiv}>
                <Typography className={classes.forgotPasswordText}>
                  Forgot Password ? <br />
                  <span
                    className={classes.boldText}
                    onClick={props.resetYourPassword}
                  >
                    Click Here
                  </span>
                </Typography>
              </div>
              <div className={classes.loginButtonDiv}>
                <Button
                  variant="contained"
                  className={classes.loginButton}
                  color="primary"
                >
                  LOG IN
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.submitFormDiv}>
          <Typography className={classes.alreadyHaveAccountText}>
            I don't have an account.
            <span
              className={classes.createOneNowText}
              onClick={() => props.resetState()}
            >
              {" "}
              Create one now
            </span>
          </Typography>
        </div>
      </div>
    </CSSTransition>
  );
};

const resetYourPassword = (props) => {
  const { classes } = props;

  return (
    <CSSTransition
      in={true}
      timeout={800}
      classNames="fade"
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.LeftPaneStepOuterDiv}>
        <div className={classes.logoAndBackButtonDiv}>
          <ArrowBackIosIcon
            className={classes.backButton}
            onClick={() => props.resetYourPassword()}
          />
        </div>

        <div className={classes.greetingsAndFormDiv}>
          <Typography className={classes.boldText}>
            Reset Your Password
          </Typography>
          <Typography className={classes.ResetPasswordScreenText}>
            Enter your email or mobile number below and we will send you
            instructions on how to quickly reset your password.
          </Typography>
          <div className={classes.ResetPasswordFormDiv}>
            <div className={classes.loginScreenTextBoxDiv}>
              <ComputerOutlinedIcon
                className={classes.loginScreenTextFieldIcons}
              />{" "}
              <Input
                id="emailOrMobile"
                placeholder="Your Email or Mobile number"
                className={classes.textFieldsLoginForm}
              />
            </div>

            <Button
              variant="contained"
              className={classes.sendResetInstructionsButton}
              color="primary"
            >
              SEND RESET INSTRUCTIONS
            </Button>
            <Typography className={classes.ResetPasswordScreenTypography}>
              Never mind I just remember my password <br />
              <span
                className={classes.boldText}
                onClick={() => props.resetYourPassword()}
              >
                Return to Log in
              </span>
            </Typography>
            <Typography className={classes.ResetPasswordScreenTypography}>
              Still having trouble logging in <br />
              <span className={classes.boldText}>Chat with us now</span>
            </Typography>
          </div>
        </div>
        <div className={classes.submitFormDiv}>
          <Typography className={classes.alreadyHaveAccountText}>
            I don't have an account.
            <span
              className={classes.createOneNowText}
              onClick={() => props.resetState()}
            >
              {" "}
              Create one now
            </span>
          </Typography>
        </div>
      </div>
    </CSSTransition>
  );
};

const step4 = (props) => {
  const { classes } = props;

  return (
    <CSSTransition
      in={true}
      timeout={1000}
      classNames="fade"
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.createMySecureAccountDiv}>
        <ArrowBackIosIcon
          className={classes.backButtonStep4}
          onClick={props.createMySecureAccount}
        />
        <div className={classes.shareForOthersTextDiv}>
          <Typography className={classes.boldText}>
            Jim's life was important to many people.
          </Typography>
          <Typography className={classes.greetingsText}>
            Share for others what Jim meant to you.
          </Typography>
        </div>
        <div className={classes.shareForOthersTextAreaDiv}>
          <div className={classes.shareForOthersTextAreaDiv1}>
            <div className={classes.TextAreaOuterDiv}>
              <TextField
                id="outlined-multiline-static"
                placeholder="How do you know Jim ? (Click here to answer)"
                multiline
                rows="4"
                className={classes.textArea}
                variant="outlined"
              />
            </div>
            <div className={classes.downTriangle}></div>
            <AccountCircleIcon className={classes.AccountCircleIcon} />
            <input
              accept="image/*"
              className={classes.inputFile}
              id="outlined-button-file"
              multiple
              type="file"
            />
            <label htmlFor="outlined-button-file">
              <Button
                variant="outlined"
                component="span"
                className={classes.uploadYourPhotoButton}
              >
                <AddAPhotoIcon /> UPLOAD YOUR PROFILE PHOTO
              </Button>
            </label>
          </div>

          <div className={classes.shareForOthersSubmitDiv}>
            <Button
              variant="contained"
              className={classes.shareForOthersSubmitButton}
              color="primary"
            >
              DONE
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

const renderSteps = (key, props) => {
  const step = key;

  switch (step) {
    case "step-2":
      return step2(props);

    case "step-3":
      return step3(props);

    case "step-1":
    default:
      return step1(props);
  }
};

const SelfServiceLoginScreenLeftPane = (props) => {
  const {
    stepNumber,
    className,
    loginNowScreenActive,
    resetYourPasswordScreenActive,
    selfServiceLoginStep4,
  } = props;

  const steps = (props) => {
    return (
      <>
        {[1, 2, 3].map((key) => (
          <CSSTransition
            in={key === stepNumber}
            timeout={1000}
            key={key}
            classNames={className}
            mountOnEnter
            unmountOnExit
          >
            {renderSteps(`step-${key}`, props)}
          </CSSTransition>
        ))}
      </>
    );
  };
  return (
    <TransitionGroup>
      {(() => {
        if (loginNowScreenActive) {
          return loginNow(props);
        } else {
          return steps(props);
        }
      })()}
      {/* {steps(props)}
      {loginNowScreenActive && loginNow(props)} */}
      {resetYourPasswordScreenActive && resetYourPassword(props)}
      {selfServiceLoginStep4 && step4(props)}
    </TransitionGroup>
  );
};

export default withStyles(styles)(SelfServiceLoginScreenLeftPane);
