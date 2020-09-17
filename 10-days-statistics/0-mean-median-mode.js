
function processData(input) {
    input = input.split('\n')[1].split(' ').map(Number)
    let len = input.length;
    const sorted = input.slice().sort((a, b) => a - b);
    let sum = 0;
    let mean = 0;
    let median = 0;
    let mode = 0;

    let counts = {}

    // MEAN
    for (let i = 0; i < len; i++) {
        sum += sorted[i]
    }
    mean = sum / len
    console.log(mean)

    // MEDIAN
    let middle = Math.floor(len / 2);
    len % 2 === 0 ?
        console.log((sorted[middle - 1] + sorted[middle]) / 2) :
        console.log(sorted[middle])

    // MODE
    sorted.forEach(function (e) {
        if (counts[e] === undefined) {
            counts[e] = 0
        }
        counts[e] += 1
    })
    mode = Math.max.apply(Math, counts) == -Infinity ? sorted[0] : Math.max.apply(Math, counts)
    console.log(mode)
}




let arr = [64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060]
processData(arr)