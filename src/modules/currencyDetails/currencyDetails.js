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
        <li>{this.state.CurrencyDetails}</li>
      </div>
    );
  }
}
