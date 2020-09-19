function towerBreakers(n, m) {
    return (m == 1 || n % 2 == 0 ? 2 : 1)
}

const n = 1;
const m = 4;
console.log(towerBreakers(n, m))