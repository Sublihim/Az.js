const path = require('path');

module.exports = {
    entry: './src/az.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'az.js',
        library: 'Az',
    },
    target: 'node',
    mode: 'development',
};
