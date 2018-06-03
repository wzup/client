'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className={'Index'}>
            <h1>Index</h1>
            <Link to={'/sync'}>Sync</Link>
        </div>
    )
}

export default Index;
