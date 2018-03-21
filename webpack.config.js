const path = require("path");
const webpack = require("webpack");
__dirname = path.join(__dirname, "../");
const webpack_rules = [];
const webpackOption = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js", // "bundle-[chunkhash].js"
        publicPath: "" // you will get dist configuration virtually else you won't get err: GET http://localhost:8081/dist/bundle.js net::ERR_ABORTED
    },
    module: {
        rules: webpack_rules
    }
};
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};
webpack_rules.push(babelLoader);
module.exports = webpackOption;