/* eslint-disable arrow-parens */
const baseConfig = require('../../webpack.config');

module.exports = storybookBaseConfig => {
  const config = Object.assign({}, storybookBaseConfig, {
    resolve: Object.assign({}, storybookBaseConfig.resolve, {
      modules: baseConfig.resolve.modules,
      extensions: baseConfig.resolve.extensions,
      alias: baseConfig.resolve.alias
    }),
    module: {
      rules: [
        ...storybookBaseConfig.module.rules,
        ...baseConfig.module.rules.slice(2)
      ]
    }
    // Object.assign({}, storybookBaseConfig.module, {
    // rules: storybookBaseConfig.module.rules.concat(
    //   baseConfig.module.rules.slice(1)
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader')
      }
    ]
  });

  return config;
};
