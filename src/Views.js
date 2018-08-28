import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CurrencyList from './modules/currencyList/CurrencyList'
import CurrencyDetails from './modules/currencyDetails/currencyDetails';

const Views = () => {
  return (
    <Switch>
      <Route exact path='/' component={CurrencyList} />
      <Route exact path='/currencyDetails/:id' component={CurrencyDetails} />
    </Switch>
  )
}

export default Views
