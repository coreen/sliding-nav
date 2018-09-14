const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.tsx",
	mode: "development",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json", ".png", ".scss"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{
				test: /\.png$/,
				loader: "file-loader",
				options: {
					context: "./src"
				}
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css", // defaults to main.css
			chunkFilename: "[id].css"
		})
	]
}