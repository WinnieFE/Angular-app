
#### AngularJS generator

> 基于[yeoman](https://github.com/yeoman/generator-angular)快速搭建AngularJS项目。
version 0.15.1.

1. 首先安装相关插件，* yo * , * grunt-cli * , * bower * , * generator-angular * 。

```
npm install -g grunt-cli bower yo generator-angular

```
如果你想使用Sass预处理器，需要安装Ruby和Compass。我使用的是LESS预处理器，在Sublime Text里配置LESS和Less2Css，即可将LESS代码转为CSS代码。

2. 运行 * yo angular * ,可输入app名称，如果不输入，则与文件夹同名。

```
yo angular [app-name]

```

3. 运行 * grunt serve * 便可预览默认页面。
4. 需要注意的是此时地址栏显示地址为：

```
http://localhost:9000/#/

```
我们要想去除#/,采取的方法如下：

- 在app.js的config配置中我们注入$locationProvider,然后用

```
    $locationProvider.html5Mode(true)
```

配之后，在加载入口文件之后，地址栏会变成http://localhost:9000/task,而不是http://localhost:9000/#/task

- 然后，我们希望在地址栏中输入路由事也不输入#，那么需要在grunt中重写文件。

```
    npm install http-rewrite-middleware;
```
Gruntfile.js中引入 * http-rewrite-middleware *

```
  // Rewrite URL to 'index.html#/' to enable angualr $location html5Mode and remove the # from URL
  var rewriteModule = require('http-rewrite-middleware');
```

```
 livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              rewriteModule.getMiddleware([   
                  {from: '^/scripts/(.*)', to: '/scripts/$1'},
                  {from: '^/vendors/(.*)', to: '/vendors/$1'},
                  {from: '^/styles/(.*)', to: '/styles/$1'},
                  {from: '^/images/(.*)', to: '/images/$1'},
                  {from: '^/views/(.*)', to: '/views/$1'},
                  {from: '^/bower_components/(.*)', to: '/bower_components/$1'},
                  {from: '^/(.*).html(.*)$', to: '/$1.html$2'},
                  {from: '^/(.+)$', to: '/index.html#/$1'}
              ]),
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
```
此时，一个AngularJS框架的项目创建成功。

5. Angular可用集成器有：
- angular
- angular:controller
- angular:directive
- angular:filter
- angular:route
- angular: service
- angular:provide
- angular:factory
- angular:value
- ...

使用方法举例：

```
yo angular
yo angular:controller myroute
yo angular:directive mydirective

```
