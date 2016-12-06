const path = require('path');

module.exports = {
    context: __dirname,
    entry: './components/Tuner.jsx',
    output:{
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}