let arr = [10, 40, 30, 50, 20]
let weight = [1, 2, 3, 4, 5]

function processData(input) {
    let arr = input.split('\n')[1].split(' ').map(Number)
    let weight = input.split('\n')[2].split(' ').map(Number)
    let sum = 0;
    let weightSum = 0;
    arr.map((item, i) => { sum += item * weight[i] });
    weight.map(i => weightSum += i);
    console.log((sum / weightSum).toFixed(1))
}
processData(arr, weight)