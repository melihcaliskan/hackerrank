function vowelsAndConsonants(s) {
    let vowelChars = ["a", "e", "i", "o", "u"]
    let vowels = [];
    let consonants = [];
    for (let i = 0; i < s.length; i++) {
        if(vowelChars.includes(s[i])){
            vowels.push(s[i])
        } else {
            consonants.push(s[i])
        }
    }
    vowels.map(i=>console.log(i))
    consonants.map(i=>console.log(i))
}

let s = "javascriptloops"
vowelsAndConsonants(s)