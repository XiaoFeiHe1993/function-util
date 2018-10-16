import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

var env = process.env.NODE_ENV;

var config = {
    input: 'index.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ]
};

if (env === 'production') {
    config.plugins.push(
        uglify({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false
            }
        })
    )
}

export default config;