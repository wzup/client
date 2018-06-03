'use strict';

import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const IndexLoadable = Loadable( {
    loader: () => {
        return new Promise((resolve, reject) => {
            let Index = import ( './Index' );
            let tid = setTimeout(() => {
                clearTimeout(tid);
                resolve(Index);
            }, 1500);
        })
    },
    loading() {
        return <h1>Loading...</h1>
    }
} );

export default IndexLoadable;
