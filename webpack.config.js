const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	mode: "development",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	// Enable sourcemaps for debugging webpack output.
	// TODO: remove this for production release
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json", ".png", ".scss"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{
				test: /\.png$/,
				loader: "file-loader",
				options: {
					context: "./src"
				}
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
}