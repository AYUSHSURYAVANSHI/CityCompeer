const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your React application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Name of the bundled file
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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
