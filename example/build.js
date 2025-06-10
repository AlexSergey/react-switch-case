let { frontendCompiler } = require('@rockpack/compiler');

frontendCompiler({}, (finalConfig, _, __, mode) => {
    console.log(mode);
    finalConfig.output.publicPath = mode === 'development' ? '/' : './';
});
