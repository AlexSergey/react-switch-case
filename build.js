const { libraryCompiler } = require('@rockpack/compiler');

libraryCompiler({
  name: 'Switch',
  cjs: {
    src: './src',
    dist: './lib/cjs'
  },
  esm: {
    src: './src',
    dist: './lib/esm'
  },
  externals: [
    'react'
  ]
});
