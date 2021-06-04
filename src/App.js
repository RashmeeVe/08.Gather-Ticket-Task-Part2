import React from "react";
import Button from "@material-ui/core/Button";
import SelfServiceLoginScreen from "./SelfServiceLoginScreen";
import WhyCreateFreeAccount from "./WhyCreateFreeAccount";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogBoxOpen: false,
      isWhyCreateFreeAccountDialogBoxOpen: false,
    };
  }
  handleClickOpen = () => {
    this.setState({ isDialogBoxOpen: true });
  };

  handleClose = () => {
    this.setState({ isDialogBoxOpen: false });
  };

  OpenWhyCreateFreeAccountDialog = () => {
    this.setState({ isWhyCreateFreeAccountDialogBoxOpen: true });
  };

  CloseWhyCreateFreeAccountDialog = () => {
    this.setState({ isWhyCreateFreeAccountDialogBoxOpen: false });
  };

  render() {
    const { isDialogBoxOpen, isWhyCreateFreeAccountDialogBoxOpen } = this.state;
    return (
      <>
        <div className="App">
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
            Click Me
          </Button>
        </div>

        {isDialogBoxOpen && (
          <SelfServiceLoginScreen
            isDialogBoxOpen={isDialogBoxOpen}
            handleClose={this.handleClose}
          />
        )}

        <div className="App">
          <Button
            variant="outlined"
            color="primary"
            onClick={this.OpenWhyCreateFreeAccountDialog}
          >
            Why Create a Free Account
          </Button>
        </div>

        {isWhyCreateFreeAccountDialogBoxOpen && (
          <WhyCreateFreeAccount
            isWhyCreateFreeAccountDialogBoxOpen={
              isWhyCreateFreeAccountDialogBoxOpen
            }
            CloseWhyCreateFreeAccountDialog={
              this.CloseWhyCreateFreeAccountDialog
            }
          />
        )}
      </>
    );
  }
}

export default App;
