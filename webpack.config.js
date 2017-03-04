var path = require('path');

module.exports = {
    entry: './src/mocha.js',
    output: {
        path: path.resolve(__dirname, './assets'),
        filename: 'mocha_bundle.js'
    }
};
