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
                loader: 'babel-loader',
                query:{compact: false}
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}