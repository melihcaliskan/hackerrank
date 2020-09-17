function processData(input) {
    const sorted = input.slice().sort((a, b) => a - b);
    let q1, q2, q3;
    let lower = []
    let upper = []
    let median, lowerMedian, upperMedian;

    let len = input.length

    median = findMedian(sorted)

    for (let i = 0; i < len; i++) {
        sorted[i] < median ?
            lower.push(sorted[i]) :
            sorted[i] != median ? upper.push(sorted[i]) : null
    }

    lowerMedian = findMedian(lower)
    upperMedian = findMedian(upper)
    console.log(lowerMedian)
    console.log(median)
    console.log(upperMedian)
}

function findMedian(arr) {
    let len = arr.length
    let middle = Math.floor(len / 2);
    return arr.length % 2 === 0 ?
        (arr[middle - 1] + arr[middle]) / 2 :
        arr[middle]
}

let arr = [3, 7, 8, 5, 12, 14, 21, 13, 18]
processData(arr)