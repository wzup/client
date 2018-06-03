'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';


import App from './App';
// let AppHot = hot(module)(App);

let render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById( 'react-root' )
    );
}

render(App);

if ( module.hot ) {
    module.hot.accept( './App', () => { render( App ) } );
}
