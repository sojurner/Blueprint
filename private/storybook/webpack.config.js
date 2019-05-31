// /* eslint-disable arrow-parens */
const baseConfig = require('../../webpack.config');

// module.exports = storybookBaseConfig => {
//   const config = Object.assign({}, storybookBaseConfig, {
//     resolve: Object.assign({}, storybookBaseConfig.resolve, {
//       modules: baseConfig.resolve.modules,
//       extensions: baseConfig.resolve.extensions,
//       alias: baseConfig.resolve.alias
//     }),
//     module: {
//       rules: [
//         ...storybookBaseConfig.module.rules,
//         ...baseConfig.module.rules.slice(2)
//       ]
//     }
//   });

//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     use: [
//       {
//         loader: require.resolve('awesome-typescript-loader')
//       }
//     ]
//   });

//   return config;
// };

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    ...config.resolve.alias,
    ...baseConfig.resolve.alias
  };
  return config;
};
