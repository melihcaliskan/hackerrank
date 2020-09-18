function findFreq(arr) {
    var frequency = {};
    var max = 0;
    var result;
    for (var v in arr) {
        frequency[arr[v]] = (frequency[arr[v]] || 0) + 1;
        if (frequency[arr[v]] > max) {
            max = frequency[arr[v]];
            result = arr[v];
        }
    }
    return result
}

function equalizeArray(arr) {
    let count = 0;
    let most_freq = findFreq(arr)
    console.log(most_freq)
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (current != most_freq) {
            count++
        }
    }
    return count
}


const arr = "24 29 70 43 12 27 29 24 41 12 41 43 24 70 24 100 41 43 43 100 29 70 100 43 41 27 70 70 59 41 24 24 29 43 24 27 70 24 27 70 24 70 27 24 43 27 100 41 12 70 43 70 62 12 59 29 62 41 100 43 43 59 59 70 12 27 43 43 27 27 27 24 43 43 62 43 70 29".split(' ')
console.log(equalizeArray(arr))