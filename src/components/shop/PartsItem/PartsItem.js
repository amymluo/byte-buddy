import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "./PartsItem.scss";
import { CardContent } from "@material-ui/core";
import { Card } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";

//Transition for dialog on button click
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Parts Shop Container
export default class PartsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  toggleModalState = setToBool => {
    this.setState({
      isModalOpen: setToBool
    });
  };

  render() {
    const { canBuy, buyItem } = this.props;
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
          <DialogTitle id="alert-dialog-slide-title">
            {this.props.name}
          </DialogTitle>
          <DialogContent>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <img src={this.props.img} alt="item" />
              </Grid>
              <Grid item>
                <div className={"item-price"}>
                  <img src={"/assets/purple_hex.png"} alt="hex points" />
                  <Typography varient="body2">{this.props.price}</Typography>
                </div>
              </Grid>
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
                this.toggleModalState(false);
                if (canBuy(this.props.price)) {
                  buyItem(this.props.price);
                }
                console.log();
              }}
              color="primary"
            >
              Buy
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
