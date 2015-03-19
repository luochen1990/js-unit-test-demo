Javascript单元测试框架Demo
==========================

这个Demo主要是用来演示js的单元测试框架及一些配套工具的使用。

`Mocha/`目录用来演示 `Mocha`, `Mocha + chai`, `Mocha + chai + Karma` 的使用
`Jasmine/`目录用来演示 `Jasmine`, `Jasmine + chai`, `Jasmine + chai + Karma` 的使用

[compare.md文件](compare.md)中罗列了一些两者的比较

How To Run
----------

要运行 `* + Karma` 的演示，需要先用npm全局安装karma-cli：`/> npm install -g karma-cli`

### Mocha

- 安装Mocha：`/> npm install -g mocha` (我使用的版本是mocha@2.2.1)
- 安装依赖模块：`Mocha> npm install`
- 运行测试代码（`Mocha + chai`）：`Mocha> mocha`
- 运行测试代码（`Mocha + chai + Karma`）：`Mocha> karma start`

### Jasmine

- 安装Jasmine：`/> npm install -g jasmine` (我使用的版本是jasmine@2.2.1)
- 安装依赖模块：`Jasmine> npm install`
- 运行测试代码（`Jasmine + chai`）：`Jasmine> jasmine`
- 运行测试代码（`Jasmine + chai + Karma`）：`Jasmine> karma start`

Todo
----

尚未解决karma 和 commonjs require 一起使用时的问题：https://github.com/karma-runner/karma-commonjs/issues/29

