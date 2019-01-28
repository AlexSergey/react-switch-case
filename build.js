const { compile } = require('rocket-starter');

compile({
    html: false,
    library: 'Switch'
}, config => {
    config.externals = [{
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }]
});