const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const config = {
  devtool: "source-map",
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'index.js', '.jsx', 'index.jsx', '.less'],
    modules: ['node_modules'], // 指定套件的路徑
  },
  plugins: [
    HTMLWebpackPluginConfig,
  ],
  devServer:{
    port:3034,
    publicPath: "/",
    contentBase:'./src',
    host: '0.0.0.0',
    disableHostCheck: true,
    inline:true,
  }
}

export default config;
