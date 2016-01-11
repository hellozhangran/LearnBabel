#**LearnBabel**

**这个repo的初衷是想搞清楚这几个问题**

1. babel最基础的用法，命令行。
2. babel6、babel5是怎么个区别。
3. babel-core、babel-node分别是什么鬼。
4. babel什么时候用在node服务端，什么时候用在浏览器上，怎么用。
5. babel可以用es6语法module来组织代码，为何还需要经常结合browserify。
6. babel在gulp中怎么用。
7. ...

***
##**babel基础**

babel5是一个整体package，但是babel6把它拆分成两部分，babel-core、babel-cli 。安装：

```
npm install --save-dev babel-core
npm install -g babel-cli
```

**babel-core**
主要负责把es5转换成es6，安装完成后需要
```
require("babel-core/register");
require("./main.js");
```
然后在`mian.js`中写自己的es6代码。

**babel-cli**
babel-cli是一个命令行工具，可以指定参数，编译es6文件为es5文件。

注意，安装到local目录是不好使的，要安装到全局。
下面简单的编译了es6代码
```
babel main.js --out-file script-compiled.js
```
安装完babel-cli会自动装好babel-node
输入babel-node命令，自动进入node命令行环境，可以直接在这里写es6代码。

***

`taps`
1. node要使用es6的新特性必须加"use strict";
2.

>[在node中使用babel6的一些简单分享](https://cnodejs.org/topic/56460e0d89b4b49902e7fbd3)
[The Six Things You Need To Know About Babel 6](http://jamesknelson.com/the-six-things-you-need-to-know-about-babel-6/)
[babel无法编译？](http://www.cnblogs.com/xljzlw/p/4973310.html?utm_source=tuicool&utm_medium=referral)
