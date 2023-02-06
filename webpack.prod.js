import path from "path";
import { merge } from "webpack-merge";
import config from "./webpack.config.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import webpack from "webpack";
const __dirname = path.resolve();

export default merge(config, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		assetModuleFilename: "assets/[name][ext]",
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.[contenthash].html",
		}),
		new MiniCssExtractPlugin({
			filename: "bundle.[contenthash].css",
		}),
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: "./src/index.html" }),
	],
});
