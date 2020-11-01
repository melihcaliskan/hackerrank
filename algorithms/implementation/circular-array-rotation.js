function arrayRotate(arr) {
    arr.unshift(arr.pop());
    return arr;
}

function circularArrayRotation(arr, k, m) {
    let rotated_arr = [];
    let response = [];
    while (k > 0) {
        rotated_arr = arrayRotate(arr);
        k--
    }
    for (let i = 0; i < m.length; i++) {
        response.push(rotated_arr[m[i]])
    }
    return response;
}

const a = [3, 4, 5];
const k = 2;
const m = [1, 2];

console.log(circularArrayRotation(a, k, m))