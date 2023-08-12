module.exports = function reverse(n) {
	let str = '' + n;
	const arr = str.split('');
	const filteredArr = arr.filter((elem) => elem !== '-');
	const reversedStr = filteredArr.reverse().join('');
	const reversedNumber = parseInt(reversedStr, 10);
	return reversedNumber;
}
