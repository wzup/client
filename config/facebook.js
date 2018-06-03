'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

let config = {
    development: {
        sdkSrc: 'https://connect.facebook.net/en_US/sdk/debug.js'
    },
    production: {
        sdkSrc: 'https://connect.facebook.net/en_US/sdk.js'
    }
}

module.exports = config[NODE_ENV];
