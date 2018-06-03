'use strict';

import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const HomeLoadable = Loadable( {
    loader: () => {
        return new Promise((resolve, reject) => {
            let Home = import ( './Home' );
            let tid = setTimeout(() => {
                clearTimeout(tid);
                resolve(Home);
            }, 500);
        })
    },
    loading() {
        return <h1>Home loading...</h1>
    }
} );


let HomeLoadableWrapper = () => {
    return (
        <HomeLoadable />
    )
};

export default () => {
    return (
        <HomeLoadable />
    )
};


