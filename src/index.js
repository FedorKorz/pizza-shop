import './index.css';
import App from './App';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import reducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import ComboState from './store/combo-state/combo-state';
import DrinksState from './store/drinks-state/drinks-state';
import { BrowserRouter } from 'react-router-dom';
import WrappedApp from './hoc/WrappedApp';
import WrappedSellingItems from './hoc/WrappedSellingItems';

const WrapperApp = WrappedApp(App);
const WrapperdSellingItems = WrappedSellingItems();
const createStoreWithMiddleware = applyMiddleware()(createStore);

render (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <WrapperApp
                    route = '/'/>

                <WrapperdSellingItems 
                    route = '/drinks'
                    state = { DrinksState() }/>

                <WrapperdSellingItems 
                    route = '/combo'
                    state = { ComboState() }/>
            </div>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));

//