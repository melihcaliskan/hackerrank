function beautifulTriplets(d, arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        const j = arr[i] + d
        const k = arr[i] + d * 2
        arr.includes(j) && arr.includes(k) && counter++
    }
    return counter;
}

const d = 3;
const arr = [1, 2, 4, 5, 7, 8, 10]
console.log(beautifulTriplets(d, arr))