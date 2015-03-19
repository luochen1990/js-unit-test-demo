TDD & BDD
=========

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

其中describe单纯用来组织测试代码，它允许嵌套，允许指定一个字符串作为描述，it用来定义一个测试实例，它包含一段描述和一个回调函数，回调函数中包含测试逻辑和断言语句。
before()、after()、beforeEach()和afterEach()为一些钩子，主要是用来定义在it执行前或执行后要做的事情，这样可以避免在每个it中重复写这些代码。

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

