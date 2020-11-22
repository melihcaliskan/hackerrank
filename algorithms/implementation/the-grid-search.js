const isIncludes = (a, b) => a.indexOf(b) == -1 ? false : true

function gridSearch(G, P) {
    const G_with_lines = G.split(/\n/)
    const P_with_lines = P.split(/\n/)
    let index = 0;
    let count = 0;
    let response = "NO";

    for (let i = 0; i < G_with_lines.length; i++) {
        // Check if includes
        if (isIncludes(G_with_lines[i], P_with_lines[0])) {
            index = i;
            break;
        }
    }
    if (index != 0) {
        // Found it, check other lines
        for (let i = 0; i < G_with_lines.length - index; i++) {
            if (isIncludes(G_with_lines[index + i], P_with_lines[i])) {
                count++
                if (count == P_with_lines.length) {
                    response = "YES"
                }
            } else {
                break;
            }
        }
    }
    return response;
}
const G = `7283455864
6731158619
8988242643
3830589324
2229505813
5633845374
6473530293
7053106601
0834282956
4607924137`

const P = `9505
3845
3530`

console.log(gridSearch(G, P))