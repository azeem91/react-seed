import React, { Component } from "react";
import axios from "axios";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AppConstants } from "../../constants";

export default class CurrencyList extends Component {
  state = {
    currencyList: []
  };

  componentDidMount() {
    axios.get(`${AppConstants.api}tickers?symbols=ALL`).then(res => {
      const currencyList = res.data;
      this.setState({ currencyList });
    });
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
                    primary={currency[0]
                      .split("")
                      .slice(1, currency[0].length - 1)
                      .join("")}
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
