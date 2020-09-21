function appendAndDelete(s, t, k) {
    let same_count = 0;
    let min = Math.min(s.length, t.length)
    let max = Math.max(s.length, t.length)

    if (s === t) {
        return "Yes"
    }

    if (s.length < t.length) {
        return "No"
    }
    
    for (let i = 0; i < min; i++) {
        s[i] === t[i] && same_count++
        if (s[i] != t[i]) {
            break;
        }
        console.log(s[i], t[i], same_count)
    }

    let new_t = t.substr(same_count)
    let change_count = s.substr(same_count).length + new_t.length
    if (k >= change_count) {
        return "Yes"
    } else {
        return "No"
    }
}
const s = "hackerhappy"
const t = "hackerrank"
const k = 9

console.log(appendAndDelete(s, t, k))