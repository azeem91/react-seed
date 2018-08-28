import React, { Component } from "react";
import axios from "axios";
import { List, ListItem, ListItemText } from "@material-ui/core/List";

export default class CurrencyDetails extends Component {
  state = {
    CurrencyDetails: []
  };

  componentDidMount() {
    axios.get(`https://api.bitfinex.com/v2/ticker/${this.props.match.params.id}`).then(res => {
      const CurrencyDetails = res.data;
      console.log(CurrencyDetails);
      this.setState({ CurrencyDetails });
    });
  }

  render() {
    return (
      <div className="CurrencyDetails">
        <header className="CurrencyDetails-header">
          <h1 className="CurrencyDetails-title">React Seed</h1>
        </header>
        <li>{this.state.CurrencyDetails}</li>
      </div>
    );
  }
}
