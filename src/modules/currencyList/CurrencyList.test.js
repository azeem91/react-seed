import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import CurrencyList from './CurrencyList'
import { GET } from '../../services/restApi';

// Mock API call to check if component can digest data format
window.fetch = jest.fn().mockImplementationOnce(() => ({
  status: 200,
  json: () => new Promise((resolve, reject) => {
    resolve({
      CurrencyList: [
        [
          [a, b, c],
          [d, e, f]
        ]
      ]
    })
  })
}))
  .mockImplementationOnce(() => ({
    status: 500,
  }))

// Test Endpoint
const fetchCurrencyList = async () => {
  const response = await GET('tickers', { symbols: 'ALL' })
  if (response.status >= 400) {
    throw (new Error('Error fetching currency List'))
  } else {
    return await response.json()
  }
}


test('Currency List rendering', () => {
  it('CurrencyList should render properly', () => {
    shallow(<CurrencyList />)
  })

  describe('componentDidMount', () => {
    it('sets the state componentDidMount', async () => {
      const renderedComponent = await shallow(<CurrencyList />)
      await renderedComponent.update()
      expect(renderedComponent.state('CurrencyList').length).toEqual(2)
    })

    it('sets the state componentDidMount on error', async () => {
      const renderedComponent = await shallow(<CurrencyList />)
      await renderedComponent.update()
      expect(renderedComponent.state('errorStatus')).toEqual('Error fetching CurrencyList')
    })
  })

  describe('API Endpoint test', () => {
    it('returns an object if status code is ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            CurrencyList: [],
          })
        }),
      }))

      expect(fetchCurrencyList).resolves.toEqual({ CurrencyList: [] })
    })

    it('throws an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500,
      }))

      expect(fetchCurrencyList).rejects.toEqual(Error('Error fetching Currency List'))
    })
  })

})


// TODO write mokes separately
