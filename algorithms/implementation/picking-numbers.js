function pickingNumbers(a) {
    let count = new Array(101).fill(0);
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        let index = a[i]
        count[index] = count[index] + 1
    }

    for (let i = 1; i <= 100; i++) {
        result = Math.max(count[i] + count[i - 1], result)
    }
    return result
}

const a = [4, 6, 5, 3, 3, 1]
console.log(pickingNumbers(a))