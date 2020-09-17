function processData(input) {
    input = input.split('\n')[1].split(' ').map(Number)
    let sum = 0, squaredDistanceSum = 0, mean = 0, result = 0;
    let len = input.length

    input.map((item, i) => { sum += item });
    mean = sum / len
    input.map((item, i) => { squaredDistanceSum += Math.pow(item - mean, 2) });
    result = Math.sqrt(squaredDistanceSum / len).toFixed(1)
    console.log(result)
}


let arr = [10, 40, 30, 50, 20]
processData(arr)