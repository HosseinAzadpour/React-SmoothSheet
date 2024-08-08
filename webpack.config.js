const path = require("path");

module.exports = {
  entry: "./src/index.js", // فایل ورودی
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "BottomSheet", // نام کتابخانه شما
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
