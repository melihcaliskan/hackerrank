function miniMaxSum(input) {
    let arr = input
    let lowest = 0, largest = 0;
    let sorted = arr.slice().sort((a, b) => a - b);

    sorted.map((item, i) => { i != 4 ? lowest += item : null });
    sorted.reverse().map((item, i) => { i != 4 ? largest += item : null });
    console.log(lowest, largest)
}

arr = [1, 2, 3, 4, 5]
miniMaxSum(arr)