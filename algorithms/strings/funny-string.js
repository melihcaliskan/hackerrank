function funnyString(s) {
    let reverse = s.split("").reverse().join("");
    let difference = []
    let reverseDifference = []
    let bool = false
    for (let i = 0; i < s.length; i++) {
        difference.push(Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i)))
        reverseDifference.push(Math.abs(reverse.charCodeAt(i + 1) - reverse.charCodeAt(i)))
    }
    console.log(difference, reverseDifference)
    for (let i = 0; i < difference.length - 1; i++) {
        console.log(difference[i], reverseDifference[i])
        if (difference[i] === reverseDifference[i]) {
            bool = true
        } else {
            bool = false;
            break;
        }
    }
    return bool ? "Funny" : "Not Funny"
}

let string = "uvzxrumuztyqyvpnji"
console.log(funnyString(string))