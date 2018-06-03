'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
// const I18nPlugin = require("i18n-webpack-plugin");
const config = require( './../config' );

module.exports = {
    context: path.resolve(__dirname, '..'),
    entry: {
        'index': '', // реакт версия, \src\js\browser.js
        'vendors': [
            // 'jquery',
            // 'react',
            // 'react-dom',
            // '@material/form-field',
            // '@material/textfield',
            // 'material-components-web',
            // 'material-components-web/dist/material-components-web',
            // 'react-bootstrap',
            // 'react-sticky',
            // 'react-redux',
            // 'react-router',
            // 'redux-thunk',
            // 'redux-logger',
            // 'react-mdl',
            // 'react-addons-css-transition-group',
            // 'classnames',
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '..', 'public'),
        publicPath: '',
        pathinfo: true,
        sourceMapFilename: "[file].map",
        devtoolModuleFilenameTemplate: "webpack:///[resource-path]?[id]"
    },
    target: 'web',
    devtool: 'cheap-module-source-map',
}
