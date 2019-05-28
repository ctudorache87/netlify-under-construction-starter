require('dotenv').config();

const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    entry: './src/main.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: ['axios'],
    plugins: [
        new webpack.DefinePlugin({
            LAMBDA_ENDPOINT: JSON.stringify(process.env.LAMBDA_ENDPOINT)
        })
    ]
}