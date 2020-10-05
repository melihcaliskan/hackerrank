function factorial(n) {
    n = BigInt(n);
    if (n === 0n) {
        return 1n;
    }
    return n * factorial(n - 1n);

}

function extraLongFactorials(n) {
    const response = factorial(n)
    return response.toString()
}

const n = 25
console.log(extraLongFactorials(n))