const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point  
  output: {
    path: path.resolve(__dirname, 'dist'),
    // path: path.resolve(__dirname, '..', 'city_backend', 'citycompeer', 'static', 'frontend'), // Adjusted output path

    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JSX and ES6
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
