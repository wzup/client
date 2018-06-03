'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require( 'path' );
// const webpack = require('webpack');
const browser_config = require( path.resolve( 'webpack/' + 'browser.' + NODE_ENV ) );
// const server_config = require(path.resolve('webpack/' + NODE_ENV + '.server'));

// console.log('[browser_config]', browser_config);

// module.exports = [browser_config, server_config];
module.exports = browser_config;
