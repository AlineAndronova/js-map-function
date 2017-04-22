;(function () {
	'use strict';

	function map (fun, array) {
		if (typeof(fun) != 'function') {
			console.log('First argument must be a function');
		};

		if (!Array.isArray(array)) {
			console.log('Second argument must be a array');
		};

		var tmpArray = [];
		for (var i = 0; i < array.length; i++) {
			var item = fun(array[i]);
			tmpArray.push(item);
		};
		return tmpArray;
	}

	function square(x) { return x * x; } // возведение в квадрат
	console.log(map(square, [1, 2, 3, 4]));
	console.log(map(square, []));
})();
