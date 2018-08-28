import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CurrencyList from './modules/currencyList/CurrencyList'

const Views = () => {
    return (
        <Switch>
            <Route exact path="/" component={CurrencyList} />
        </Switch>
    )
}

export default Views