import React, { Component } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// API MW keep code clean and deal all API calls form one place
import { GET } from '../../services/restApi';

export default class CurrencyList extends Component {
  state = {
    currencyList: []
  };

  async componentDidMount() {
    try {
      const res = await GET('tickers', { symbols: 'ALL' })
      this.setState({ currencyList: res.data })
    } catch (e) {
      console.error(e);
      this.setState({ currencyList: [] })
    }
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
              <Link key={currency[0]} to={`/currencyDetails/${currency[0]}`}>
                <ListItem>
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
