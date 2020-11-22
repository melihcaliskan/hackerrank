function sortAlphabet(str) {
    return [...str].sort((a, b) => a.localeCompare(b)).join("");
}
function sherlockAndAnagrams(s) {
    let arr = {}
    let count = 0;
    let size = s.length;
    for (let i = 1; i < size; i++) {
        for (let j = 0; j + i <= size; j++) {
            const temp_string = s.substr(j, i);
            const sorted_temp_string = sortAlphabet(temp_string)
            console.log(temp_string, sorted_temp_string)
            if (arr[sorted_temp_string]) {
                count += arr[sorted_temp_string];
                arr[sorted_temp_string]++;
            } else {
                arr[sorted_temp_string] = 1;
            }
        }
    }
    return count;
}

const s = "kkkk"
console.log(sherlockAndAnagrams(s))