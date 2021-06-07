const styles = {
  selfServiceLoginScreenOuterDiv: {
    maxWidth: 900,
    maxHeight: 600,
    width: 900,
    height: 600,
    "@media only screen and (max-width: 960px)": {
      width: "540px",
      height: "500px",
    },
    "@media only screen and (max-width: 599px)": {
      maxHeight: 1000,
      // width: "600px",
      width: "100%",
      height: "100%",
    },
  },

  selfServiceLoginScreen: {
    display: "flex",
    height: "100%",
    width: "100%",
    padding: "0px",
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/1276/5263/products/17S01YTB154_045fddf2-278c-4d51-be9e-31b5ed628557_1024x1024.jpg?v=1571439888")`,
    "@media only screen and (max-width: 960px)": {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },

  selfServiceLoginScreenLeftPane: {
    height: "100%",
    // width: "40%",
    width: "300px",
    boxShadow: "none",
    backgroundColor: "white",
    "@media only screen and (max-width: 960px)": {
      width: "100%",
      height: "60%",
      position: "absolute",
      top: "40%",
      overflow: "auto !important",
    },
  },

  LeftPaneStepOuterDiv: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "300px",
    backgroundColor: "white",
    "@media only screen and (max-width: 960px)": {
      width: "100%",
      height: "auto",
    },
  },
  logoAndBackButtonDiv: {
    padding: "8% 0% 8% 8%",
    "@media only screen and (max-width: 960px)": {
      padding: "20px 20px 0px 20px",
    },
  },

  companyLogo: {
    width: "50px",
    height: "20px",
    "@media only screen and (max-width: 960px)": {
      display: "none",
    },
  },

  backButton: {
    cursor: "pointer",
  },

  greetingsAndFormDiv: {
    padding: "0%",
    textAlign: "center",
    "@media only screen and (max-width: 960px)": {
      padding: "0% 0% 2% 0%",
    },
  },

  greetingsText: {
    fontSize: "22px",
    color: "#757575",
    padding: "0% 0% 3% 0%",
  },

  formDiv: {
    padding: "5% 8% 8% 8%",
    "@media only screen and (max-width: 960px)": {
      padding: "0% 5% 0% 5%",
    },
  },

  textFields: {
    width: "100%",
    marginBottom: "3%",
    marginTop: "3%",
    color: "#757575",
    "& input::placeholder": {
      fontStyle: "italic",
    },
  },

  step2FormDiv: {
    "@media only screen and (max-width: 500px)": {
      columns: "3",
    },
  },

  relationWithDeceasedButton: {
    boxShadow: "none",
    lineHeight: "1",
    margin: 5,
    textTransform: "none",
    fontSize: 12,
    padding: "0px",
    border: "1px solid",
    color: "#7194da",
    backgroundColor: "white",
    borderColor: "#b3d7ff",
    "&:hover": {
      color: "white",
      backgroundColor: "#7194da",
      borderColor: "#7194da",
    },
    "&:focus": {
      color: "white",
      backgroundColor: "#7194da",
    },
  },
  relationWithDeceasedIcon: {
    height: "1.2em",
    width: "1.2em",
  },
  relationWithDeceased: {
    marginTop: "5%",
    paddingTop: "8px",
    width: "83%",
    // height: "30px !important",
    "& input": {
      padding: "10px",
    },
  },

  loginScreenTextBoxDiv: {
    display: "flex",
    alignItems: "flex-end",
  },

  textFieldsLoginForm: {
    width: "100%",
    marginTop: "9%",
    marginLeft: "2%",
    "@media only screen and (max-width: 960px)": {
      marginTop: "5%",
    },
  },
  loginScreenTextFieldIcons: {
    color: "#757575",
  },

  forgotPasswordAndLoginDiv: {
    display: "flex",
    flexDirection: "row",
    padding: "20% 0 10% 0",
    justifyContent: "space-between",
    "@media only screen and (max-width: 960px)": {
      padding: "10% 0 0 0",
    },
  },

  forgotPasswordText: {
    textAlign: "center",
    fontSize: "13px",
    color: "#757575",
  },

  boldText: {
    fontWeight: "bold",
    cursor: "pointer",
  },

  ResetPasswordScreenText: {
    textAlign: "center",
    color: "#757575",
    paddingLeft: "4%",
    paddingRight: "4%",
    fontSize: "15px",
  },
  ResetPasswordFormDiv: {
    padding: "0% 5% 0% 5%",
  },

  loginButton: {
    paddingLeft: "25px",
    paddingRight: "25px",
    backgroundColor: "#004080",
  },

  sendResetInstructionsButton: {
    width: "100%",
    marginTop: "10%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "#004080",
  },

  ResetPasswordScreenTypography: {
    marginTop: "8%",
    textAlign: "center",
    fontSize: "13px",
    color: "#757575",
  },

  submitFormDiv: {
    padding: "5% 5% 2% 5%",
  },

  continueButton: {
    fontSize: "13px",
    width: "100%",
    height: "45%",
    backgroundColor: "#7194da",
    color: "white",
    paddingLeft: 0,
    paddingRight: 0,
  },

  alreadyHaveAccountText: {
    padding: "10px 0px 0px 0px",
    textAlign: "center",
    fontSize: "12px",
    color: "#757575",
  },

  termsAndPoliciesText: {
    padding: "10px 0px 0px 0px",
    textAlign: "center",
    fontSize: "10px",
    color: "#757575",
  },

  loginNowText: {
    color: "#7194da",
    fontWeight: "bold",
    cursor: "pointer",
  },

  createOneNowText: {
    color: "#004080",
    fontWeight: "bold",
    cursor: "pointer",
  },

  selfServiceLoginScreenRightPane: {
    height: "100%",
    width: "600px",
    // width: "60%",
    boxShadow: "none",
    backgroundColor: "inherit",
    "@media only screen and (max-width: 960px)": {
      position: "absolute",
      top: "0px",
      width: "100%",
      height: "40%",
    },
  },

  RightPaneStepOuterDiv: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    "@media only screen and (max-width: 960px)": {
      width: "100%",
      height: "100%",
    },
  },

  closeIconDiv: {
    position: "absolute",
    padding: "3% 3% 0% 0%",
    zIndex: 1,
    right: "0px",
    top: "0px",
    textAlign: "right",
    "@media only screen and (max-width: 960px)": {
      padding: "10px 10px 0px 0px",
    },
  },
  closeIcon: {
    cursor: "pointer",
    opacity: 0.5,
  },

  avatarDiv: {
    // marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "@media only screen and (max-width: 960px)": {
      margin: "0px",
    },
  },
  avatar: {
    width: 140,
    height: 140,
    border: "3px solid white",
    "@media only screen and (max-width: 960px)": {
      width: 80,
      height: 80,
    },
  },

  NameOfThePerson: {
    fontFamily: "Great Vibes",
    fontSize: "4em",
    lineHeight: "0.8",
    "@media only screen and (max-width: 960px)": {
      fontSize: "2em",
    },
  },
  yearOfBirth: {
    marginTop: "-10px",
  },

  overlayElement: {
    position: "absolute",
    top: "0px",
    height: "100%",
    width: "100%",
    opacity: 0,
    "&:hover": {
      opacity: 0.2,
    },
    "@media only screen and (max-width: 960px)": {
      width: "100%",
      height: "41%",
    },
  },

  createMySecureAccountDiv: {
    position: "absolute",
    top: "0px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    // justifyContent: "space-between",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    zIndex: 1,
    textAlign: "center",
    "@media only screen and (max-width: 960px)": {
      height: "auto",
    },
  },

  backButtonStep4: {
    padding: "2% 0% 0% 2%",
    cursor: "pointer",
  },

  shareForOthersTextDiv: {
    padding: "0% 3% 4% 3%",
    height: "auto",
  },

  shareForOthersTextAreaDiv: {
    // height: "100%",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",

    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  shareForOthersTextAreaDiv1: {
    width: "100%",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  TextAreaOuterDiv: {
    width: "45%",
    padding: "2%",
    border: "1px solid #757575",
    borderRadius: "10px",
    boxShadow: "2px 2px 6px 0px #757575",
    "@media only screen and (max-width: 960px)": {
      width: "70%",
    },
  },

  textArea: {
    width: "100%",
    fontSize: "12px",
    zIndex: 1,
  },

  // downTriangle: {
  //   marginTop: "-5px",
  //   borderTop: "20px solid white",
  //   // borderTop: "20px solid #004080",
  //   borderLeft: "20px solid transparent",
  //   borderRight: "20px solid transparent",
  //   zIndex: 1,
  // },

  downTriangle: {
    width: 20,
    height: 20,
    marginTop: "-10px",
    marginBottom: "5px",
    borderRight: "1px solid #757575",
    borderBottom: "1px solid #757575",
    zIndex: 1,
    transform: "rotate(45deg)",
    backgroundColor: "white",
  },

  AccountCircleIcon: {
    // height: "25%",
    height: "70px",
    width: "70px",
    // width: "25%",
    color: "#004080",
    marginTop: "-12px",
  },

  inputFile: {
    display: "none",
  },
  uploadYourPhotoButton: {
    border: "2px solid #004080",
    color: "#004080",
  },

  shareForOthersSubmitDiv: {
    width: "100%",

    "@media only screen and (max-width: 960px)": {
      width: "100%",
      marginTop: "50px",
    },
  },

  shareForOthersSubmitButton: {
    width: "40%",
    height: "70%",
    backgroundColor: "#004080",
    marginBottom: "3%",
    "@media only screen and (max-width: 960px)": {
      width: "60%",
    },
  },

  WhyCreateFreeAccountDiv: {
    maxWidth: "400px",
    height: "100%",
    width: "100%",
    textAlign: "center",
    backgroundColor: "transparent",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    overflow: "auto",
    // "@media only screen and (max-width: 599px)": {
    //   maxWidth: "600px",
    //   width: "100%",
    // },
  },

  transparentDiv: {
    height: "40px",
    backgroundColor: "transparent",
  },
  WhyCreateFreeAccountAvatarDiv: {
    backgroundColor: "#8a2429",
    height: "50px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },

  WhyCreateFreeAccountAvatar: {
    position: "relative",
    top: "-40px",
    width: "80px",
    height: "80px",
    zIndex: 1,
    // width: "20%",
    // height: "20%",
    margin: "auto",
    border: "3px solid white",
  },

  WhyCreateFreeAccountTextDiv: {
    backgroundColor: "#8a2429",
    textAlign: "center",
    color: "white",
    padding: "0 4% 3% 4%",
  },
  WhyCreateFreeAccountTextHeading: {
    fontSize: "1.5em",
  },
  WhyCreateFreeAccountDescriptionDiv: {
    backgroundColor: "white",
    color: "#757575",
    padding: "3% 4% 0 4%",
  },
  WhyCreateFreeAccountContinueButton: {
    backgroundColor: "#8a2429",
    color: "white",
    width: "80%",
    marginTop: "4%",
    marginBottom: "2%",
  },
  WhyCreateFreeAccountDescriptionColour: {
    color: "#8a2429",
    fontSize: "13px",
  },
  MaybeLater: {
    display: "flex",
    justifyContent: "center",
    padding: "2%",
    cursor: "pointer",
  },

  /* Sliding Functionality */
  // "MuiDialog-paperWidthLg": {
  //   overflow: "hidden !important",
  // },

  // "slide-enter": {
  //   transform: "translateY(100%)",
  // },

  // "slide-enter-active": {
  //   transform: "translateY(0px)",
  //   transition: "transform 900ms",
  // },

  // "slide-exit": {
  //   transform: "translateY(0px)",
  //   transition: "transform 900ms",
  // },
  // "slide-exit-active": {
  //   transform: "translateY(-100%)",
  //   transition: "transform 900ms",
  // },
  // "slide-exit-done": {
  //   transform: "translateY(-100%)",
  // },

  // @media only screen and (max-width: 960px) {
  //   "slide-enter": {
  //     transform: "translateY(130%)",
  //   }
  //   "slide-exit-active" {
  //     transform: "translateY(-130%)",
  //   }
  //   "slide-exit-done" {
  //     transform: "translateY(-130%)",
  //   }
  // }

  /* Slide Back */
  // "slide-back-enter": {
  //   transform: "translateY(-700px)",
  // },
  // "slide-back-enter-active": {
  //   transform: "translateY(0px)",
  //   transition: "transform 900ms",
  // },
  // "slide-back-enter-done": {
  //   transform: "translateY(0px)",
  // },

  // "slide-back-exit": {
  //   transform: "translateY(0px)",
  //   transition: "transform 900ms",
  // },
  // "slide-back-exit-active": {
  //   transform: "translateY(700px)",
  //   transition: "transform 900ms",
  // },
  // "slide-back-exit-done": {
  //   transform: "translateY(700px)",
  // },

  // @media only screen and (max-width: 960px) {
  //   "slide-back-enter": {
  //     transform: "translateY(-100%)",
  //   }
  //   "slide-back-exit-active": {
  //     transform: "translateY(100%)",
  //   }
  //   "slide-back-exit-done": {
  //     transform: "translateY(200%)",
  //   }
};

export default styles;
