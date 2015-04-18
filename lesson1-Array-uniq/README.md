# Array去重uniq

场景
==================================
```
* 仅仅考虑单一类型；
```
测试:
==================================
```
* len = 5k的Array；
* len = 1w的Array；
* 浏览器：chrome 版本 41.0.2272.118 (64-bit)
* 系统：
```
![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/34.pic.jpg)

针对上述场景，一一测试各种实现的效率，找出我能力所限最优方案。

## 知识点

1. 里边用到了karma测试框架，详情见这里[karma]

### 算法一
说明：>两层嵌套
```javascript
uniq1: function (orgArr) {
    var newArr = orgArr.slice(0);
    var len = newArr.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (newArr[i] === newArr[j]) {
                newArr.splice(j, 1);
            }           
        }
    }
    return newArr;
}
```
测试结果：

`5000`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/11.pic.jpg)

`10000`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/12.pic.jpg)
结果：
`数据越大越耗时`

### 算法二
说明：一层循环，Array自带的indexOf方式
```javascript
/**
 * 一层循环，Array自带的indexOf方式
 * 
 * @param  {Array} arr 原数组
 * @return {Array}     结果
 */
uniq2: function (orgArr) {
    var newArr = [];
    if (newArr.indexOf) {
        for (var i = 0, item; (item = orgArr[i++]); ) {
            if (newArr.indexOf(item) === -1) {
                newArr.push(item);
            }
        }
    } 
    return newArr;
}
```
为了进行比较，我把算法一和算法二放在了一起(下同)，测试结果：

`5000`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/36.pic.jpg)

`10000`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/37.pic.jpg)

结果：
```
1、数据越大越耗时
2、算法二明显优于算法一
```

### 算法三
说明：使用Array原生filter方法
```javascript
/**
 * 使用Array原生filter方法
 * 
 * @param  {Array} arr 原数组
 * @return {Array}     结果
 */
uniq3: function (orgArr) {
  var newArr = arr.filter(function (item, index) {
    return arr.indexOf(item, index + 1) === -1 ;
  });

  return newArr;
}
```
测试结果：

`5000`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/38.pic.jpg)

`10000`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/39.pic.jpg)

结果：
```
1、算法二目前来说还是最好，当然算法一最差
2、算法二和算法三目前测试场景下，性能差不多
```

### 算法四
说明：一层循环，先调用原生sort方法
```javascript
/**
 * 一层循环，先调用原生sort方法
 * 
 * @param  {Array} arr 原数组
 * @return {Array}     结果
 */
uniq4: function (orgArr) {
  orgArr.sort();
  var result = [];
  var word = 0;
  var len = orgArr.length;
    for (var i = 1; i < len; i++) {
      if (orgArr[word] !== orgArr[i]) {
        result.push(orgArr[word]);
        word = i;
        if (word === len - 1) {
          result.push(orgArr[word]);
        }
      }
    }
    return result;
}
```
测试结果：

`5000`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/40.pic.jpg)

`10000`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/68.pic.jpg)

结果：
```
目前来看这种算法完胜，当然最好的肯定要放在最后了，看看后面那个怎么样
```

### 算法五
说明：一层循环，使用hastable方式
```javascript
/**
 * 一层循环，使用hastable方式
 * 
 * @param  {Array} arr 原数组
 * @return {Array}     结果
 */
uniq5: function (orgArr) {
  var result = [];
    var hasItem = {};
    for (var i = 0, item; (item = orgArr[i++]);) {
        if (!hasItem[item]) {
            result.push(item);
            hasItem[item] = true;
        }
    }
    return result;
}
```
测试结果：

`5000`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/69.pic.jpg)

`10000`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/70.pic.jpg)

从上面结果来看，`算法四`和`算法五`在`len = 5k`和`len = 1w`几乎不分伯仲，为了区分这两个算法的优劣，我们单独为这两个算法增加数据量进行对比：

`2w`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/71.pic.jpg)

`10w`:

![](https://github.com/hanyangecho/js-lessons/blob/master/lesson1-Array-uniq/img/72.pic.jpg)

结果：
```
1、算法四和算法五，数据量小的情况下不分伯仲；
2、数据量大，算法五明显好于算法四。
```

##结论：
```
目前测试场景下，算法五最优
```

[karma]: https://github.com/hanyangecho/karma-mocha-requriejs-phantomjs



