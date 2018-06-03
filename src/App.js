'use strict';

import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home.Loadable.js';

// console.log( '[this]', this );
// console.log( '[window]', window );

console.log('[Home]', Home);


const App = () => {
    return (
        <Switch className={'app'}>
            <Route exact path="/" component={Home} />
            <Route path="/sync" component={Sync} />
        </Switch>
    )
}


const Sync = () => {
    return (
        <div className={'Sync'}>
            <h1>Sync</h1>
            <Link to={'/'}>Home</Link>
        </div>
    )
}

const css = {
    app: {
        width: '100%',
        height: '100%'
    }
}

export default hot( module )( App );
// export default App;
