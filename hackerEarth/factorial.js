let num = 2;
function isFactorial(num) {
    if (num == 0)
        return 1;
    return num * isFactorial(num - 1);
}

console.log(isFactorial(num));