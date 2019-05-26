// https://github.com/diegohaz/arc/wiki/Webpack
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HappyPack = require('happypack');
const mergeWith = require('lodash/mergeWith');
const isArray = require('lodash/isArray');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const sourceDir = process.env.SOURCE || 'src';
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/');
const sourcePath = path.join(process.cwd(), sourceDir);
const outputPath = path.join(process.cwd(), 'dist');
const inProduction =
  process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';

function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
  return undefined;
}

const wpConfig = {
  base: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'happypack/loader'
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['happypack/loader', 'ts-loader'].filter(Boolean)
        },
        {
          test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/,
          loader: 'url-loader?limit=8000'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(process.cwd(), 'public/index.html')
      }),
      new HappyPack({
        loaders: ['babel-loader']
      }),
      new webpack.DefinePlugin({
        NODE_ENV: process.env.NODE_ENV,
        PUBLIC_PATH: publicPath.replace(/\/$/, '')
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      modules: [].concat(sourceDir, ['node_modules'])
    },
    entry: {
      app: [sourcePath]
    },
    output: {
      filename: '[name].js',
      path: outputPath,
      publicPath
    }
  },
  development: {
    mode: 'development',
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        fullBuildTimeout: 200
      })
    ],
    entry: {
      app: ['webpack/hot/only-dev-server']
    },
    devtool: 'cheap-module-source-map',
    devServer: {
      hot: true,
      historyApiFallback: { index: publicPath },
      inline: true,
      contentBase: 'public',
      headers: { 'Access-Control-Allow-Origin': '*' },
      host,
      port,
      stats: 'errors-only'
    },
    optimization: {
      namedModules: true
    }
  },
  production: {
    mode: 'production',
    plugins: [new WebpackMd5Hash()],
    output: {
      filename: '[name].[chunkhash].js'
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()],
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            }
          }
        }
      },
      runtimeChunk: true
    }
  }
};

const config = mergeWith(
  {},
  wpConfig.base,
  wpConfig[process.env.NODE_ENV],
  customizer
);

module.exports = config;
