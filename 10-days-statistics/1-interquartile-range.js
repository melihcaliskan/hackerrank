
function processData(input) {
    let arr = input.split('\n')[1].split(' ').map(Number)
    let weight = input.split('\n')[2].split(' ').map(Number)
    let result = [], lower = [], upper = [];
    let median, lowerMedian, upperMedian;

    arr.map((item, i) => {
        [...Array(weight[i])].map((x, i) => result.push(item))
    });
    const sorted = result.slice().sort((a, b) => a - b);

    median = findMedian(sorted)

    for (let i = 0; i < result.length; i++) {
        sorted[i] < median ?
            lower.push(sorted[i]) :
            sorted[i] != median ? upper.push(sorted[i]) : null
    }
    lowerMedian = findMedian(lower)
    upperMedian = findMedian(upper)
    let answer = (upperMedian - lowerMedian).toFixed(1)
    console.log(answer)
}

function findMedian(arr) {
    let len = arr.length
    let middle = Math.floor(len / 2);
    return arr.length % 2 === 0 ?
        (arr[middle - 1] + arr[middle]) / 2 :
        arr[middle]
}

arr = [6, 12, 8, 10, 20, 16]
weight = [5, 4, 3, 2, 1, 5]
processData(arr, weight)