import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./MyStyles";
import withMobileDialog from "@material-ui/core/withMobileDialog";

import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

// import "./SlidingFunction.css";

class WhyCreateFreeAccount extends React.Component {
  render() {
    const { classes } = this.props;
    const { fullScreen } = this.props;

    return (
      // <div>
      <Dialog
        // fullScreen={fullScreen}
        open={this.props.isWhyCreateFreeAccountDialogBoxOpen}
        onClose={this.props.CloseWhyCreateFreeAccountDialog}
        aria-labelledby="responsive-dialog-title"
        className={classes.WhyCreateFreeAccountDialog}
        maxWidth="xs"
        // maxheight="lg"
      >
        <div className={classes.WhyCreateFreeAccountDiv}>
          <div className={classes.transparentDiv}></div>
          <div className={classes.WhyCreateFreeAccountAvatarDiv}>
            <Avatar
              alt="Avatar"
              src="https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105561/126045782-vector-illustration-of-avatar-and-dummy-sign-collection-of-avatar-and-image-stock-symbol-for-web-.jpg"
              className={classes.WhyCreateFreeAccountAvatar}
            />
          </div>
          <div className={classes.WhyCreateFreeAccountTextDiv}>
            <Typography className={classes.WhyCreateFreeAccountTextHeading}>
              Why create a free account?
            </Typography>
            <hr />
            <Typography className={classes.WhyCreateFreeAccountText}>
              Memories of John are important tributes that will last forever.
              These should come from real people, not anonymous posts.
            </Typography>
          </div>
          <div className={classes.WhyCreateFreeAccountDescriptionDiv}>
            <Typography className={classes.boldText}>
              By continuing, you will be able to...
              <br />
              <br />
            </Typography>
            <Typography className={classes.WhyCreateFreeAccountDescription}>
              Feel connected to family & friends
              <br />
              Stay informed about service details
              <br />
              Get notified of any LiveStream details
              <br />
              Share your favourite photos and memories
              <br />
              Get notified when other memories are shared
            </Typography>
            <Button
              variant="contained"
              className={classes.WhyCreateFreeAccountContinueButton}
              color="primary"
            >
              CONTINUE
            </Button>
            <Typography
              className={classes.WhyCreateFreeAccountDescriptionColour}
            >
              Your contact information will never be shared publicly
            </Typography>
            <Typography
              className={classes.MaybeLater}
              onClick={this.props.CloseWhyCreateFreeAccountDialog}
            >
              <CancelOutlinedIcon /> <span> Maybe Later</span>
            </Typography>
          </div>
        </div>
      </Dialog>
      // </div>
    );
  }
}

WhyCreateFreeAccount.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(
  withMobileDialog({ breakpoint: "xs" })(WhyCreateFreeAccount)
);
