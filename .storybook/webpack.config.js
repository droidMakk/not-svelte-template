const path = require('path');
const stylepreprocess = require('../svelte.config');

module.exports = async ({ config, mode }) => {
    let j;
    const svelteloader = config.module.rules.find((r, i) => {
        if (r.loader && r.loader.includes('svelte-loader')) {
            j = i;
            return true;
        }
    });

    config.module.rules[j] = {
        ...svelteloader,
        options: {
            ...svelteloader.options,
            style: stylepreprocess.preprocess.style
        }
    }

    config.module.rules.push({
        test: /\.scss$/,
        use: {
            loader: 'sass-loader',
            options: {
                includePaths: [ path.resolve('../src') ]
            }
        }
    })

    return config
}