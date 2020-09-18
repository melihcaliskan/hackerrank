function hurdleRace(k, height) {
    const result = Math.max.apply(Math, height) - k;
    return result > 0 ? result : 0;
}

const height1 = [1, 6, 3, 5, 2]
const k1 = 4;

const height2 = [2, 5, 4, 5, 2]
const k2 = 7;

let result = hurdleRace(k2, height2)
console.log(result)