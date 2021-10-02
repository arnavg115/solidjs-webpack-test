const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "solid",
                [
                  "@babel/preset-typescript",
                  { isTSX: true, allExtensions: true },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
