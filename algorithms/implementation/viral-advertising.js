function viralAdvertising(n) {
    let people = 5;
    let count = 0;
    for (let i = 0; i < n; i++) {
        people = Math.floor(people / 2)
        count += people
        people *= 3
    }
    return count
}

const n = 3

console.log(viralAdvertising(n))