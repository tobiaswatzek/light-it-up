const path = require("path");

module.exports = {
  entry: "./src/light-it-up.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "light-it-up.js",
    path: path.resolve(__dirname, "dist"),
  },
};
