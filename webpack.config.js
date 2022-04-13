const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html", }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "@components": path.resolve(__dirname, "./src/@components"),
      "@pages": path.resolve(__dirname, "./src/@pages"),
      "@utils": path.resolve(__dirname, "./src/@utils"),
      "@assets": path.resolve(__dirname, "./src/@assets"),
      "@hooks": path.resolve(__dirname, "./src/@hooks"),
      "@store": path.resolve(__dirname, "./src/@store"),
      "@middleware": path.resolve(__dirname, "./src/@middleware"),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};