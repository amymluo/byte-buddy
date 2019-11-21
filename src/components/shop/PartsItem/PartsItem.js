import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "./PartsItem.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { Snackbar, SnackbarContent } from "@material-ui/core";

//Transition for dialog on button click
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Parts Shop Container
export default class PartsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      canAfford: false,
      isSnackOpen: false
    };
  }

  toggleModalState = setToBool => {
    this.setState({
      isModalOpen: setToBool
    });
  };

  canNotAfford = () => {
    this.setState({
      canAfford: true
    });
  };

  handleSnackClose = () => {
    this.setState({
      isSnackOpen: false
    })
  }
  render() {
    const { canBuy, buyItem } = this.props;
    const { canAfford } = this.state;
    return (
      <div>
        <div
          className={"shop-item"}
          onClick={() => this.toggleModalState(true)}
        >
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <div className="item-img">
                <img
                  src={this.props.img}
                  alt={this.props.name}
                  className={"item-mainimg"}
                />
              </div>
            </Grid>
            <Grid item>
              <Typography variant="h6">{this.props.name}</Typography>
            </Grid>
            <Grid item>
              <div className={"item-price"}>
                <img src={"/assets/purple_hex.png"} alt="hex points" />
                <Typography varient="body2">{this.props.price}</Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        <Dialog
          className={"shop-item-dialog"}
          open={this.state.isModalOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.toggleModalState(false)}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">Confirm Buy</DialogTitle>
          <DialogContent style={{ width: "300px" }}>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <div className="item-img">
                  <img
                    src={this.props.img}
                    alt={this.props.name}
                    className={"item-mainimg"}
                  />
                </div>
              </Grid>
              <Grid item>
                <Typography variant="h6">{this.props.name}</Typography>
              </Grid>
              <Grid item>
                <div className={"item-price"}>
                  <img src={"/assets/purple_hex.png"} alt="hex points" />
                  <Typography varient="body2">{this.props.price}</Typography>
                </div>
              </Grid>
              {canAfford && (
                <Typography className={"warning"} varient="body2">
                  Sorry, you dont have enough points to buy this item.
                </Typography>
              )}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.toggleModalState(false)}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (canBuy(this.props.price)) {
                  this.toggleModalState(false);
                  this.setState({ isSnackOpen: true });
                  buyItem(this.props.price);
                } else {
                  this.canNotAfford();
                }
              }}
              color="primary"
              variant="contained"
            >
              Buy
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.isSnackOpen}
          autoHideDuration={500}
          onClose={this.handleSnackClose}
          message={<span id="message-id">Successfully purchased {this.props.name}</span>}
        >
          {/* <SnackbarContent
            message={}
            /> */}
        </Snackbar>
      </div>
    );
  }
}
