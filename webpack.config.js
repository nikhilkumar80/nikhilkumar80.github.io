var path = require('path');

module.exports = {
    entry: './src/sinonChai.js',
    output: {
        path: path.resolve(__dirname, './assets'),
        filename: 'sinonChai.js'
    }
};
