module.exports = function reverse (n) {
	if(n < 0) {
		n * (-1);
	}
	while(n % 10 == 0) {
		n = n / 10;
	}
	var answer = n.toString().split('').reverse().join('');
	return parseInt(answer);
}
