Javascript单元测试框架比较
==========================

Mocha vs. Jasmine
-----------------

| ...					| Mocha				| Jasmine			|
| :--					| -----				| -------			|
| 对运行环境的支持		| nodejs, broswer | 同 |
| 断言库支持情况		| 均支持第三方断言库（如chai） | 同 |
| 异步测试支持情况		| supported （通过调用 done() 的形式） | 2.0版本支持 |
| 测试报告的形式		| CLI形式支持较好，无需配置就可以直接使用；有第三方工具生成web页面报告 | 有简单的CLI报告；自带web页面测试报告，但也需要一些配置工作 |
| Karma支持情况			| 支持 | 同 |
| Mock数据				| 需要通过其它工具（如Nock）支持Mock Http请求的数据 | 同 |
| 部分测试				| 通过在测试代码中添加标记选择性忽略部分测试代码 或 在CLI中通过参数指定如`mocha -g math` | 在测试代码中添加标记 或 在url中指定spec参数 |
| CI支持情况			| 支持或通过第三方插件支持大多数主流CI | 同 |
| 项目成熟度			| 较新（2012年发布1.0版本） | 较成熟（2011年发布1.0版本，2013年发布2.0版本） |
| 项目活跃情况			| [较活跃](https://github.com/mochajs/mocha/pulse) | [较不活跃](https://github.com/jasmine/jasmine/pulse) |

