import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import CurrencyList from './CurrencyList'
import axios from 'axios';
import { GET } from '../../services/restApi';
import MockAdapter from 'axios-mock-adapter';

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('CurrencyList snapshot test', async () => {
  const wrapper = shallow(<CurrencyList />);
  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});