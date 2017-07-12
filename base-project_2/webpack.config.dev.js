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
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: [".js",".json",".jsx"],
        alias: {}
    },
    module: {
        rules: [{
                exclude: /(node_modules|bower_components)/,
                test: /\.js[x]?$/,
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
    /*loaders: [{
        test:require.resolve('jquery'),
        loader:'expose?jQuery!expose?$'
    }],*/
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),

        new ExtractTextPlugin({
            filename: './dist/styles.min.css',
            allChunks: false,
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     // compress: {
        //     //     warnings: false
        //     // }
        // }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function() {
                    return [precss, autoprefixer];
                }
            }
        }),
        new HtmlWebpackPlugin({
            webpackDevServer: "<script src='http://localhost:8080/webpack-dev-server.js'></script>",
            template: "./html/index.html",
            filename: "./dist/index.html",
        }),

    ],
    externals: {
        jquery: 'window.$',
        "react": 'React',
        'react-dom': 'ReactDOM',
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist/"),
        compress: true,
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true,
        Info: true
    }

}


//router

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