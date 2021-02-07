function serviceLane(n, cases) {
    let response = []

    for (let i = 0; i < cases.length; i++) {
        let arr = [];
        for (let j = Math.min(...cases[i]); j < Math.max(...cases[i]); j++) {
            arr.push(n[j])
            if (j == Math.max(...cases[i]) - 1) {
                response.push(Math.min(...arr))
            }
        }
    }
    return response;
}

const n = [2, 3, 1, 2, 3, 2, 3, 3]
const cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]
console.log(serviceLane(n, cases))