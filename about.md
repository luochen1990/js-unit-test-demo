Javascript单元测试概述
======================

现有的测试相关的工具主要有以下几类

测试框架
--------

测试框架主要提供

- 提供一个一键运行测试的命令
- 生成测试报告
- 提供一个断言库

用不同的测试框架决定了

- 测试用什么命令（这个可以自己定义sh脚本来统一）
- 测试报告的样式
- 测试代码的断言样式，或者说可读性（通常测试框架都支持使用第三方断言库，所以这个也可以通过使用第三方断言库来统一）

目前流行的测试框架有Mocha，Jasmine，Qunit等

断言库
------

使用不同的断言库决定了测试代码的样式，或者说可读性，目前流行的断言库有

- chai.js
- should.js
- expect.js

Http请求Mock工具
----------------

提供模拟Http服务器的方法，使得Web客户端可以独立于服务端进行测试和开发。

Runner
------

提供一键在多个不同终端（浏览器）上运行测试代码并生成测试报告的能力。主要用来解决浏览器兼容性测试的问题。
