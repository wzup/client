'use strict';

// const path = require( 'path' );
const util = require( 'util' );
// const NS_PER_SEC = 1e9;
const NS_PER_MSEC = 1e6;

/**
 * regexp: from\s+'([^\']+)' => = require('$1')
 */
let historyApiFallback = require( 'connect-history-api-fallback' );
let webpack = require( 'webpack' );
let webpackDevMiddleware = require( 'webpack-dev-middleware' );
let webpackHotMiddleware = require( 'webpack-hot-middleware' );
let wpConfig = require( '../webpack.conf' );
let appConfig = require('../config')['development'];

// require the module as normal
let appName = process.env.npm_package_name || 'Browsersync Client';
let bs = require( "browser-sync" ).create( appName );
const bundler = webpack( wpConfig );

// console.log( '[process.env]', util.inspect( process.env, { colors: true, depth: 0 } ) );
// console.log( '[config]', util.inspect( config, { colors: true, depth: null } ) );



/**
 * Reload all devices when bundle is complete
 * or send a fullscreen error message to the browser instead
 */
// bundler.plugin('done', function (stats) {

//     // console.log('[stats]', util.inspect(stats, {colors: true, depth: 1}));

//     // return bs.sockets.emit( 'fullscreen:message', {
//     //     title: "Webpack Error:",
//     //     body: '10 seconds have elapsed!',
//     //     timeout: 1000
//     // } );

//     // if ( stats.hasErrors() || stats.hasWarnings() ) {
//     //     return bs.sockets.emit( 'fullscreen:message', {
//     //         title: "Webpack Error:",
//     //         body: stats.toString(),
//     //         timeout: 100000
//     //     } );
//     // }
//     bs.reload();
// } );


// let handle = 'serverStart';
// console.time( handle );
let time = process.hrtime();
// .init starts the server
bs.init( {
    port: appConfig.port,
    ui: {
        port: appConfig.uiPort,
    },
    // server: {
    //     baseDir: '.',
    //     middleware: [
    //         historyApiFallback(),

    //         webpackDevMiddleware( bundler, {
    //             publicPath: config.output.publicPath,
    //             // These settings suppress noisy webpack output so only errors are displayed to the console.
    //             noInfo: false,
    //             quiet: false,
    //             stats: {
    //                 assets: true,
    //                 colors: true,
    //                 version: false,
    //                 hash: true,
    //                 timings: true,
    //                 chunks: true,
    //                 chunkModules: true
    //             },
    //             // writeToDisk: true

    //             // for other settings see
    //             // http://webpack.github.io/docs/webpack-dev-middleware.html
    //         } ),

    //         // bundler should be the same as above
    //         webpackHotMiddleware( bundler )
    //     ],
    // },
    server: true,
    middleware: [
        // (req, res, next) => {
        //     // console.log('[req]', req);
        //     // console.log('[res]', res);
        //     // console.log('[next]', next);
        //     console.log('[res.query]', res.query);
        //     res.end();
        // },
        historyApiFallback(),

        webpackDevMiddleware( bundler, {
            publicPath: wpConfig.output.publicPath,
            // These settings suppress noisy webpack output so only errors are displayed to the console.
            noInfo: false,
            quiet: false,
            hot: true,
            stats: {
                assets: true,
                colors: true,
                version: false,
                hash: true,
                timings: true,
                chunks: true,
                chunkModules: true
            },
            // writeToDisk: true

            // for other settings see
            // http://webpack.github.io/docs/webpack-dev-middleware.html
        } ),

        // bundler should be the same as above
        webpackHotMiddleware( bundler )
    ],
    // plugins: [ 'bs-fullscreen-message' ],
    serveStatic: [ './public' ],
    files: [ './public/css/*.css', './index.html' ],
    // proxy: {
    //     target: 'https://google.com'
    // }
}, ( props ) => {
    // console.log('[Server Started] took: ', console.timeEnd(handle));
    let diff = process.hrtime( time );
    console.log( '[Server Started] in: ', diff[ 0 ] + 's ' + diff[ 1 ] / NS_PER_MSEC + 'ms' );
} );



// let tid = setTimeout(() => {
//     clearTimeout(tid);
//     bs.notify("Compiling, please wait!");
//     bs.reload('./public/css/*.css');
//     bs.exit();
// }, 3000);

// Now call methods on bs instead of the
// main browserSync module export
// bs.reload("*.html");
