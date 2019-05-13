import asyncPlugin from 'preact-cli-plugin-async';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default function (config, env, helpers) {

    console.log('isProd: ', env.isProd);

    if (!env.isProd) {
        require('dotenv').config({
            path: '.env.development'
        })
    }

    config.plugins.push(
        new helpers.webpack.DefinePlugin({
            'process.env.API_URL': JSON.stringify(process.env.API_URL)
        }),
        new CopyWebpackPlugin([
            { context: `${__dirname}/src/s3`, from: `*.*` }
        ])
    );

    asyncPlugin(config);
}
