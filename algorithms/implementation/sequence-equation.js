function permutationEquation(p) {
    let arr = []
    for (let i = 1; i <= p.length; i++) {
        let value_index = p.findIndex(item => item === i) + 1;
        console.log(`Value: ${i} -> index: ${value_index}`)

        let result_index = p.findIndex(item => item === value_index) + 1;
        console.log(`${i}. item -> ${result_index}`)
        console.log(`--------------`)

        arr.push(result_index)
    }
    return arr
}

let p = [5, 2, 1, 3, 4]
console.log(permutationEquation(p))