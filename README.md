### React项目基本骨架
+ .babelrc : babel解析器配置文件
+ .bowerrc : 指定bower install的组件存放位置
+ .eslintignore : 配置eslint语法规范监测忽略的文件目录
+ .eslintrc.js : 定义eslint语法规范规则
+ .gitignore : 定义git上传忽略的文件目录
+ bower.json : bower配置文件
+ gulpfile.js : gulp配置文件
+ package.json : npm配置文件
+ typings.json : 智能提示配置文件
+ webpack.develop.config.js : webpack开发时配置文件
+ webpack.publish.config.js : webpack发布生产时配置文件
+ src : 项目程序目录
+ src/bower_components : bower管理的web前端libs
+ src/components : 自定义组件目录
+ src/assets : 资源目录
+ src/js : 项目全局js文件目录
+ src/js/app.js : 项目入口文件
+ src/containers : 项目页面目录
+ src/index.html : 项目入口页面
+ src/template.html : webpack生产环境自动生成到dist目录的项目入口页面模板
+ 运行 : npm run dev
+ 打包 : npm run pub

### v1版本引入antd
+ npm i antd babel-plugin-import -D
+ 配置webpack以及babel
##### antd 按需加载：
+ 1.babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件
+ 2.npm i babel-plugin-import -D
+ 3.修改 .babelrc 文件
```
"plugins": [
    [
    "import", { 
    "libraryName": "antd",
        "style": "css" }
    ]
]
```
+ 4.修改主题颜色：修改antd/styles/themes/default.less 中的@primary-colors属性

### v2版本引入react-router的使用
