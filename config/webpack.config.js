const webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    babelCfg = require("./babel.config"),
    paths = {
        root: path.join(__dirname, '../'),
        app: path.join(__dirname, '../app/'),
        dist: path.join(__dirname, '../dist/')
    };

module.exports = {
    resolve: {
        alias: {
            //cx: paths.root + 'node_modules/cx-core/src/',
            app: paths.app
            //uncomment the line below to alias cx-react to cx-preact or some other React replacement library
            //'cx-react': 'cx-preact',
        },
        extensions: ['.js', '.ts', '.tsx']
    },

    module: {
        rules: [{
            test: /\.(js|ts|tsx)$/,
            //add here any ES6 based library
            include: /[\\\/](app|cx-redux|cx|redux|redux-thunk|lodash)[\\\/]/,
            exclude: /\@firebase[\\\/]app/,
            loader: 'babel-loader',
            query: babelCfg
        }, {
            test: /\.(png|svg)$/,
            loader: 'url-loader'
        }]
    },
    entry: {
        app: paths.app + 'index.js'
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    output: {
        path: paths.dist,
        filename: "[name].js"
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ["vendor"],
        //     minChunks: Infinity
        // }),
        new HtmlWebpackPlugin({
            template: paths.app + 'index.html'
        })
    ]
};


