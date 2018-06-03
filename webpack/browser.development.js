'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const autoprefixer = require( 'autoprefixer' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
var isDebug = true;
const appConfig = require('../config')['development'];
// const I18nPlugin = require("i18n-webpack-plugin");
// const config = require( './../config' );

// let idx = path.resolve(__dirname, '..', 'src/index.js');
// console.log('[idx]', idx);

module.exports = {
    context: path.resolve( __dirname, '..' ),
    entry: {
        index: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?reload=true',
            // 'webpack/hot/only-dev-server',
            './src/index.js'
        ],
        // 'vendors': [
        //     // 'jquery',
        //     // 'react',
        //     // 'react-dom',
        //     // '@material/form-field',
        //     // '@material/textfield',
        //     // 'material-components-web',
        //     // 'material-components-web/dist/material-components-web',
        //     // 'react-bootstrap',
        //     // 'react-sticky',
        //     // 'react-redux',
        //     // 'react-router',
        //     // 'redux-thunk',
        //     // 'redux-logger',
        //     // 'react-mdl',
        //     // 'react-addons-css-transition-group',
        //     // 'classnames',
        // ]
    },
    // entry: [
    //     // './src/webpack-public-path',
    //     // 'http://localhost:3020/',
    //     // 'webpack-hot-middleware/client?reload=true',
    //     './src/index.js'
    // ],
    output: {
        filename: 'js/[name].js',
        path: path.resolve( __dirname, '..', 'public' ),
        publicPath: '/',
        pathinfo: true,
        sourceMapFilename: "[file].map",
        devtoolModuleFilenameTemplate: "webpack:///[resource-path]?[id]"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin( [ './dist/*.*', './public/js/*.*', './public/index.html' ], {
            root: process.cwd(),
            verbose: true,
        } ),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin( { // Create HTML file that includes references to bundled CSS and JS.
            template: './index.tmpl',
            filename: './index.html',
            // filename: path.resolve( __dirname, '..', 'index.html' ),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            hash: true,
            showErrors: true,
            inject: true,
            title: "Browser-sync",
            verbose: true,
            facebookSdkSrc: appConfig.facebook.sdkSrc,
        } ),
    ],
    module: {
        rules: [ {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'babel-loader' ]
            },
            {

            }
        ]
    },
    target: 'web',
    devtool: 'cheap-module-source-map',
    mode: 'development'
}
