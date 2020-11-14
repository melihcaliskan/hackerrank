const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

function beautifulDays(start, end, k) {
    let count = 0;

    for (let i = start; i < end; i++) {
        const diff = Math.abs(i - reversedNum(i))
        diff % k === 0 && count++
    }
    return count;
}

const i = 20;
const j = 23;
const k = 6;
console.log(beautifulDays(i, j, k))