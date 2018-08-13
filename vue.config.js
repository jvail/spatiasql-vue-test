const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                { from: 'node_modules/spatiasql/dist/spatiasql-worker.wasm', to: 'lib/spatiasql-worker.wasm' },
                { from: 'node_modules/spatiasql/dist/spatiasql-worker.js', to: 'lib/spatiasql-worker.js' }
            ])
        ]
    }
}
