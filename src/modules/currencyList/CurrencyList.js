import React, { Component } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { GET } from '../../services/restApi';

export default class CurrencyList extends Component {
  state = {
    currencyList: []
  };

  componentDidMount() {
    GET('tickers', { symbols: 'ALL' }).then(res => {
      const currencyList = res.data ? res.data : [];
      this.setState({ currencyList });
    })
  }

  formatCurrencyName = (currencySymbol) => {
    return currencySymbol
      .split("")
      .slice(1, currencySymbol.length - 1)
      .join("")
  }

  render() {
    return (
      <div className="CurrencyList">
        <header className="CurrencyList-header">
          <h1 className="CurrencyList-title">React Seed</h1>
        </header>
        <List>
          {this.state.currencyList.map(currency => {
            return (
              <Link to={`/currencyDetails/${currency[0]}`}>
                <ListItem key={currency[0]}>
                  <ListItemText
                    primary={this.formatCurrencyName(currency[0])}
                    secondary={"volume : " + currency[8]}
                  />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
    );
  }
}
