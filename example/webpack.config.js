const plugins = [

]


const config = {

    entry: {
        bundle: './index.js'
    },

    output: {
        filename: '[name].js',
    },

    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
    },
    watch: true,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    'babel-loader',
                    'source-map-loader',
                ],
            },
            {
                test: /\.(svg)$/,
                use: ['raw-loader'],
                // exclude: /(node_modules)/,
            }
        ]

    },
    plugins,
}

module.exports = config
