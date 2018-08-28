import React, { Component } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@material-ui/core/List';

export default class CurrencyDetails extends Component {

  state = {
    CurrencyDetails: []
  }

  componentDidMount() {
    axios.get(`https://api.bitfinex.com/v2/ticker/tBTCUSD`)
      .then(res => {
        const CurrencyDetails = res.data;
        console.log(CurrencyDetails)
        this.setState({ CurrencyDetails });
      })
  }

  render() {
    return (
      <div className="CurrencyDetails">
        <header className="CurrencyDetails-header">
          <h1 className="CurrencyDetails-title">React Seed</h1>
        </header>
        // List View
        <List>
          {this.state.CurrencyDetails.map((currency) =>
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
