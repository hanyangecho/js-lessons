define(['src/util', 'mocha', 'chai'], function (util, mocha, chai) {
	var should = chai.should();
	describe('test util', function () {
		it('uniq', function () {
            // util.Array.uniq([1, 2, 1, 3, 4, 5, 3, 1]).length.should.equal(5);
			// console.log(util.Array.uniq4([1, 2, 1, 3, 4, 5, 3, 1, 6, 1, 8, 3, 5]));
            var result = [];
            var count = 100000;
            for (var i = 0; i < count; i++) {
                result.push(Math.ceil(Math.random() * count));
            }
            // var begin1 = new Date();
            // util.Array.uniq1(result);
            // console.log('算法一耗时:' + (new Date() - begin1));
            // var begin2 = new Date();
            // util.Array.uniq2(result);
            // console.log('算法二耗时:' + (new Date() - begin2));
            // var begin3 = new Date();
            // util.Array.uniq3(result);
            // console.log('算法三耗时:' + (new Date() - begin3));
            var begin4 = new Date();
            util.Array.uniq4(result);
            console.log('算法四耗时:' + (new Date() - begin4));
            var begin5 = new Date();
            util.Array.uniq5(result);
            console.log('算法五耗时:' + (new Date() - begin5));
            (1).should.equal(1);
		});
	});
});