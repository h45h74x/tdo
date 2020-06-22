var webpack = require('webpack'),
    merge = require('webpack-merge'),
    common = require('./webpack.config');

var specific = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        publicPath: '/'
    },
    devtool: 'eval',
    devServer: {
	allowedHosts: ['tdo.sgruber.at'],
        hot: true,
        port: 9797,
        noInfo: false,
        inline: true,
        historyApiFallback: true
    }
};

module.exports = merge(common, specific);
