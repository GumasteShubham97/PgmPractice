let num = 7;


// program using the recursion function
function isFactorial(num) {
    if (num == 0)
        return 1;
    return num * isFactorial(num - 1);
}

/* function isFactorial(num) {
    // program using the iterative function
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
} */
console.log(isFactorial(num));