function isPositive(a) {
    if (a > 0) {
        return "YES"
    }
    throw a == 0 ? Error("Zero Error") : Error("Negative Error");
}

const a = 2
console.log(isPositive(a))