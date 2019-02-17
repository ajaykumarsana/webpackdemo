const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config ={
    entry: './src/index.js',
    output : {
        path : path.resolve(__dirname,'build'),
        filename: 'bundle.js',
        publicPath : 'build/'
    },
    module:
    {
        rules: [
            {
                use: 'babel-loader',
                test : /\.js$/
            },
            {
                //This adds style tag to the head
                //use: ['style-loader','css-loader'],

                //Below is for creating into new file
                use : ExtractTextPlugin.extract(
                    {
                        use : 'css-loader'
                }),
                test : /\.css$/
            },

            {
                // image loader
                test : /\.(jpe?g|png|gif|svg)$/,
                use : [
                    {
                        loader: 'url-loader',
                        options: {limit : 40000}
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [ 
        new ExtractTextPlugin('style.css')
    ]
}
module.exports = config;