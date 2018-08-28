import React, { Component } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@material-ui/core/List';
import { AppConstants } from '../../constants';

export default class CurrencyList extends Component {

  state = {
    currencyList: []
  }

  componentDidMount() {
    axios.get(`${AppConstants.api}tickers?symbols=ALL`)
      .then(res => {
        const currencyList = res.data;
        console.log(currencyList)
        this.setState({ currencyList });
      })
  }

  render() {
    return (
      <div className="CurrencyList">
        <header className="CurrencyList-header">
          <h1 className="CurrencyList-title">React Seed</h1>
        </header>
        <List>
          {this.state.currencyList.map((currency) =>
            <ListItem>
              <ListItemText
                primary={currency[0].split('').slice(1, currency[0].length - 1).join('')}
                secondary={'volume : ' + currency[8]}
              />
            </ListItem>
          )}
        </List>
      </div>
    );
  }
}
