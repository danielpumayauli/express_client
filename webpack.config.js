const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {        
        filename: 'bundle.js',
        path: path.join(__dirname, './public/js')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development'
}