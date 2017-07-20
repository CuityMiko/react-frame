/**
 * 项目开发环境配置文件
 */
var path = require('path');
// 自动打开浏览器插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// Host端口号 package.json文件的--port 端口要写在最后
var _port= isNaN(process.argv[process.argv.length-1]) ? 8080 : parseInt(process.argv[process.argv.length-1]);
var _url=`http://localhost:${_port}`;

module.exports = {
    entry:[
        'webpack/hot/dev-server',
        `webpack-dev-server/client?${_url}`,
        path.resolve(__dirname,'src/js/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    eslint: {
        configFile: '.eslintrc.js'
    },
    module: {
        loaders: [
            // 处理jsx语法和ES6语法
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
                query: {
                    presets: ['es2015', 'react','stage-0','stage-1','stage-2','stage-3']
                }
            },
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            },
            // 处理在js中引用css
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // 如果有多个加载器，中间作用感叹号隔开，多个加载器是从右往左去执行
            },
            // 处理在js中引用less
            {
                test: /\.less$/, 
                loader: 'style!css!less' // 如果有多个加载器，中间作用感叹号隔开，多个加载器是从右往左去执行
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            // 1kb=1024b 1b=8bit   25000bit~3kb
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=25000'
            },
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                loader: 'url'
            }
        ]
    },
    resolve: {
        // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        // 注意一下, extensions 第一个是空字符串! 对应不需要后缀的情况.
        extensions: ['', '.js', '.json', '.scss', '.jsx']
        // 模块别名定义，方便后续直接引用别名，无须多写长长的地址。后续直接 require('AppStore') 即可
        //alias: {
        //    AppStore: 'js/stores/AppStores.js',
        //    ActionType: 'js/actions/ActionType.js',
        //    AppAction: 'js/actions/AppAction.js'
        //}
    },
    plugins: [
        // 自动在浏览器中打开
        new OpenBrowserPlugin({url: _url, browser: 'chrome'})
    ]

}
