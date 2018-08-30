const CurrencyList = 'https://api.bitfinex.com/v2/tickers?symbols=ALL';

const data = [[1,2,3],[4,5,6]]
module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case CurrencyList:
        return Promise.resolve({
          data: data
        });
    }
  })
};