import React, { Component } from "react";
import { GET } from '../../services/restApi';

export default class CurrencyDetails extends Component {
  state = {
    CurrencyDetails: []
  };

  componentDidMount() {
    const { params: { id: symbol } } = this.props.match;
    GET(`ticker/${symbol}`).then(res => {
      const CurrencyDetails = res.data;
      this.setState({ CurrencyDetails });
    })

  }

  render() {
    return (
      <div className="CurrencyDetails">
        <header className="CurrencyDetails-header">
          <h1 className="CurrencyDetails-title">React Seed</h1>
        </header>
        <li>BID | BID_SIZE | ASK | ASK_SIZE | DAILY_CHANGE | DAILY_CHANGE_PERC | LAST_PRICE | VOLUME| HIGH | LOW</li>
        <br></br>
        <li>{this.state.CurrencyDetails.map(val=> `${val}   |   `)}</li>
      </div>
    );
  }
}
