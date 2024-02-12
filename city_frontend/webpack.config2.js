const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: "./src/index.js", // Adjust the entry point path
  output: {
    path: path.resolve(__dirname, "./city_backend/static/frontend"),
    filename: "[name].js", // Change the output filename if needed
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // optimization: {
  //   minimize: true,
  // },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     "process.env": {
  //       NODE_ENV: JSON.stringify("development"),
  //     },
  //   }),
  // ],
};
