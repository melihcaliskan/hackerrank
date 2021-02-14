function bigSorting(unsorted) {
    return unsorted.map(item => BigInt(item).toLocaleString('fullwide', { useGrouping: false })).sort((a, b) => a - b);
}

const unsorted = ['1', '200', '150', '3']
console.log(bigSorting(unsorted))