'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const util = require( 'util' );
const path = require( 'path' );
let facebook = require('./facebook');


let config = {
    development: {
        port: 3020,
        uiPort: 3021,
        facebook: facebook
    },
    production: {
        port: 3020,
        uiPort: 3021,
        facebook: facebook
    }
}

module.exports = config;
