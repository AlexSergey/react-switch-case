let { frontendCompiler } = require('@rockpack/compiler');

frontendCompiler({}, finalConfig => {
    finalConfig.output.publicPath = './';
});
