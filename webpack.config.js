let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index-bundle.js",
  },
  mode: "development",
  devServer: {
    // contentBase: path.join(__dirname, "./src"),
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
        // use: {
        //   loader: ["style-loader", "css-loader"]
        // }
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        type: "asset/resource"
      }
      // {
      //   test: /\.(svg|png|jpg|jpeg|gif)$/,
      //   include: "./src/images/",
      //   // include: "/home/abappy/Documents/odin project/React Workouts/assignments/Shopping_Cart/src/images",
      //   // include: "src/images/",
      //   // loader: "file-loader",
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[path][name].[ext]",
      //       outputPath: "./images/"
      //     }
      //   }
      // }
      // {
      //   test: /\.(svg|png|jpg|jpeg|gif)$/,
      //   use: [
      //     {
      //       loader: "url-loader"
      //     }
      //   ]
      // }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      title: "shopping cart using reactJS",
      favicon: "./src/logo.svg"
    }),
  ],
};
