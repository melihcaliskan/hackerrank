function strangeCounter(t) {
    let n = 4
    while (n <= t) {
        n = 2 * n + 2
    }
    return n - t
}

const t = 4
console.log(strangeCounter(t))