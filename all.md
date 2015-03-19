关于js单元测试
==============

[单元测试工具概述](about.md)
----------------

[测试框架演示](README.md)
------------

[Mocha vs. Jasmine](compare.md)
-----------------

TDD & BDD
---------

### BDD 行为驱动开发

行为驱动开发接口提供 describe()、it()、before()、after()、beforeEach()和afterEach()函数组合：

```
describe('Array', function(){
  before(function(){
    // ...
  });

  describe('#indexOf()', function(){
    it('should return -1 when not present', function(){
      [1,2,3].indexOf(4).should.equal(-1);
    });
  });
});
```

### TDD 测试驱动开发

测试驱动开发接口提供 suite()、test()、setup()和 teardown()。

```
suite('Array', function(){
  setup(function(){
    // ...
  });

  suite('#indexOf()', function(){
    test('should return -1 when not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
```

其它功能
--------

- 测试覆盖率报告([jscoverage](http://blog.csdn.net/teaspring/article/details/8493952))

测试框架不能解决的问题
----------------------

- 测试数据和测试逻辑的分离


