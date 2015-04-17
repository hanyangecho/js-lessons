define(function () {
	return {
		Array: {
			/**
			 * 两层for循环
			 * @param  {Array} arr 原数组
			 * @return {Array}     结果
			 */
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
			},
			// /**
			//  * 一层循环，自实现indexOf方法
			//  * 
			//  * @param  {Array} arr 原数组
			//  * @return {Array}     结果
			//  */
			// uniq2: function (orgArr) {
			//     var indexOf;
			//     var newArr = [];
			//     if (indexOf = this._indexOf) {
			//         for (var i = 0, item; (item = orgArr[i++]); ) {
			//             if (indexOf(newArr, item) === -1) {
			//                 newArr.push(item);
			//             }
			//         }
			//     }
			//     return newArr;
			// },
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
			},
			/**
			 * 使用Array原生filter方法
			 * 
			 * @param  {Array} arr 原数组
			 * @return {Array}     结果
			 */
			uniq3: function (orgArr) {
				var newArr = orgArr.filter(function (item, index) {
					return orgArr.indexOf(item, index + 1) === -1 ;
				});

				return newArr;
			},
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
			},
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
			},
			/**
			 * 一层循环，使用hastable方式，但是不使用push，使用i++
			 * 
			 * @param  {Array} arr 原数组
			 * @return {Array}     结果
			 */
			uniq6: function (orgArr) {
				var result = [];
			    var hasItem = {};
			    var j = 0;
			    for (var i = 0, item; (item = orgArr[i++]);) {
			        if (!hasItem[item]) {
			            result[j++] = item;
			            hasItem[item] = true;
			        }
			    }
			    return result;
			},
			_indexOf: function (arr, item) {
				console.log(this);
				for (var i = 0, tpm; (tpm = arr[i++]); ) {
					if (tpm === item) {
						return --i;
					}						
				}
				return -1;
			}
		}
	};
});