function squares(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        Math.sqrt(i) % 1 === 0 && count++
    }
    return count
}

const a = 17
const b = 24

console.log(squares(a, b))