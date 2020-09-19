// Thanks for help: https://www.nayuki.io/page/next-lexicographical-permutation-algorithm

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function nextPermutation(array) {
    let i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i]) {
        i--;
    }

    if (i <= 0) {
        return false;
    }

    let j = array.length - 1;
    while (array[j] <= array[i - 1]) {
        j--;
    }

    let temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return true;
}

function biggerIsGreater(w) {
    const w_array = w.split('')

    let isAvailable = w_array.map((item, index) => {
        console.log(alphabet.indexOf(w_array[index]), alphabet.indexOf(w_array[index + 1]))
        return alphabet.indexOf(w_array[index]) >= alphabet.indexOf(w_array[index + 1])
    })

    isAvailable = !isAvailable.every(function (e) {
        return e === true;
    });

    console.log(isAvailable)

    if (!isAvailable) {
        return "no answer"
    } else {
        let array = w_array
        nextPermutation(array)
        console.log(array)
        return array.join('')
    }
}

const w = "fedcbabcd"
console.log(biggerIsGreater(w))