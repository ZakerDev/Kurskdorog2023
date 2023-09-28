const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/roads.js', // Ваш основной входной файл
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сгенерированных файлов
    filename: 'bundle.js', // Имя основного выходного файла
  },
  mode: 'production', // Режим production
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
      filename: 'index.html', // Имя выходного HTML файла
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css', // Имя выходного CSS файла
    }),
  ],
  module: {
    
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Если вы используете Babel для транспиляции JavaScript
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
          },
        },
      },
      {
        test: /\.csv$/,
        use: 'csv-loader',
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.php$/,
        use: 'raw-loader',
      },
    ],
  },
  
};

