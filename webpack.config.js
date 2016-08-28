module.exports = {
    contentBase: "./dist",
    entry: [
        "./src/scss/index.scss",
        "./src/html/index.html"
    ], 
    output: {
        path: "dist",
        filename: "js/app.js"
    }, 
    module: { 
        loaders: [
            {test: /\.html$/, loader: "file", query: {name: "[name].[ext]"}},
            {test: /\.scss$/, loader: "file?name=css/app.css!sass"}
        ]
    }
};