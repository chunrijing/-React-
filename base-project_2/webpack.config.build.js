var precss = require('precss');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var glob = require('glob');

module.exports = {
    // entry: getEntrys(),
    entry: './src/router.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./bundle.js"
    },
    resolve: {
        extensions: [".js",".json",".jsx"],
    },
    module: {
        rules: [{
                exclude: /(node_modules|bower_components)/,
                test: /\.js?$/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            "presets": ["es2015","react"]
                        }
                    },
                    {
                        loader: "source-map-loader"
                    }
                ]

            }, {
                test: /\.[s]?css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader?minimize',
                    use: 'css-loader?minimize!postcss-loader?minimize!sass-loader?minimize'
                })
            },
            //图片文件使用 url-loader 来处理，小于16kb的直接转为base64 字体文件使用 url-loader 来处理，小于160kb的直接打包进JS
            {
                test: /\.(gif|png|jpg)$/,
                loader: 'url-loader?limit=16384&name=static/' + '/img/' + '[name].[ext]'
            },
            {
                test: /\.(woff|svg|eot|ttf)$/,
                loader: 'url-loader?limit=163840&name=static/' + '/font/' + '[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin({
            publicPath: 'dist/',
            filename: './styles.min.css',
            allChunks: false,
        }),
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //}),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function() {
                    return [precss, autoprefixer];
                }
            }
        }),
        new HtmlWebpackPlugin({
            publicPath: 'dist/',
            template: "./html/index.html",
            filename: "./index.html"
        }),

    ],
    externals: {
        "react": 'React',
        'react-dom': 'ReactDOM',
    }
}

// 多入口文件
function getEntrys() {

    var entrys = {};

    var src = new RegExp(__dirname.replace(/\\/g, "/") + "/src/views");

    glob.sync(__dirname + '/src/views/*.js').forEach(function(name) {
        // 前缀
        var entry = name.replace(src, "");

        // 后缀
        entry = entry.replace(/\.js$/, "");

        entrys[entry] = name;

    });

    return entrys;
}