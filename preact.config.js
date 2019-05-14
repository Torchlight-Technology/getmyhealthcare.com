import asyncPlugin from 'preact-cli-plugin-async';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default function (config, env, helpers) {

    require('dotenv').config({
        path: '.env.development'
    })

    console.log('API_URL: ', process.env.API_URL);

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
