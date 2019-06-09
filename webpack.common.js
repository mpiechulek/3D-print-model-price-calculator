//jshint esversion:6

const path = require('path');

module.exports = {
    devtool: 'source-maps',
    entry: {
        index: ['@babel/polyfill', './src/index.js']
    },
    resolve: {
        alias: {
            '@scss': path.resolve('./src/scss/'),
            '@js': path.resolve('./src/js/')
        }
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-object-rest-spread'
                        ]
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|gif|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs'
                    }
                }
            }
        ]
    }
};