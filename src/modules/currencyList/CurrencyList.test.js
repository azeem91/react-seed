import React from 'react'
import ReactDOM from 'react-dom'
import CurrencyList from './CurrencyList'
import {shallow} from 'enzyme'

test('CurrencyList', () => {
  it('CurrencyList should render properly', () => {
    expect(shallow(<CurrencyList />).find('container').exists()).toBe(true)
  })
// TODO create Mocks for API testing
})
