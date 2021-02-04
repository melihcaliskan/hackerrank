function flatlandSpaceStations(n, c) {
    let response = 0;
    let distances = []
    if (n == c.length) {
        return response;
    }
    for (let i = 0; i < n; i++) {
        if (i == c[i]) {
            distances.push(0)
        } else {
            let values = []
            for (let j = 0; j < c.length; j++) {
                const value = Math.abs(c[j] - i)
                values.push(value)
            }
            distances.push(Math.min(...values));
        }
    }
    response = Math.max(...distances)
    return response;
}

const n = 5
const c = [0, 4]

console.log(flatlandSpaceStations(n, c))