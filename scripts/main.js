;(function () {
	'use strict';

	var firstNumber = 25; // 25 is an example. Enter any number greater than 1 here.
	var secondNumber = 356; // 356 is an example. Enter any number greater than firstNumber here.

	function primeNumbers (firstNumber, secondNumber) {
		if (typeof(firstNumber) != "number" ||
			typeof(secondNumber) != "number") {
			alert("Only numbers must be entered");
			return;
		};

		if (firstNumber < 1 || secondNumber < 1) {
			alert("Numbers you enter must be greater than 1")
			return;
		};

		if (firstNumber > secondNumber || firstNumber == secondNumber) {
			alert('Second number must be greater than first number')
			return;
		};

		var primeNumbers = [];
		var numberOfDivisors;
		for (var counter = firstNumber; counter <= secondNumber; counter++) {
			numberOfDivisors = 0;

			for (var divisor = 1; divisor <= counter; divisor++) {
				if (counter % divisor == 0) {
					numberOfDivisors++;
				}
			}

			if (numberOfDivisors == 2) {
				primeNumbers.push(counter);
			}
		}

		return primeNumbers;
	}

	console.log(primeNumbers(firstNumber, secondNumber));
})();
