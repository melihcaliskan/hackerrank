function nonDivisibleSubset(k, s) {
    let remainders = new Array(k).fill(0);

    for (let i = 0; i < s.length; i++) {
        remainders[s[i] % k]++;
    }

    let firstRemainder = remainders[0];
    let maxNumberOfDivisibleSet = firstRemainder > 0 ? 1 : 0;
    for (let i = 1; i <= (k / 2); i++) {
        if (i != k - i)
            maxNumberOfDivisibleSet += Math.max(remainders[i], remainders[k - i]);
        else
            maxNumberOfDivisibleSet++;
    }
    return maxNumberOfDivisibleSet;
}

const k = 3;
const s = [1, 7, 2, 4];
// max: 1,7,4
console.log(nonDivisibleSubset(k, s))