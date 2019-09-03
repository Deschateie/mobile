/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';


import Routes from './Routes';
import reducers from './reducers';

export default props => (
  <Provider store={createStore(reducers)}>
    <Routes />
  </Provider>
);
