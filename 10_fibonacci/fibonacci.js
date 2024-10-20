const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }
    num = +num;
    function fib(number) {
        if (number === 0) {
            return 0;
        }
        if (number === 1) {
            return 1;
        }
        return fib(number - 1) + fib(number - 2);
    }
    return fib(num);
};

// Do not edit below this line
module.exports = fibonacci;
