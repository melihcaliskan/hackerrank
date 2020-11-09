const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine"
];

function timeInWords(h, m) {
    let response = "";
    console.log(h, m)
    if (m == "00") {
        response = `${numbers[h]} o' clock`
    } else if (m < "30") {
        // m smaller than 30
        if (m == "15") {
            response = `quarter past ${numbers[h]}`
        } else if (m == "1") {
            response = `${numbers[m]} minute past ${numbers[h]}`
        } else {
            response = `${numbers[m]} minutes past ${numbers[h]}`
        }
    } else if (m == "30") {
        response = `half past ${numbers[h]}`
    } else if (m == "45") {
        const next_hour = parseInt(h) + 1
        response = `quarter to ${numbers[next_hour]}`
    } else {
        // m greater than 30
        const next_hour = parseInt(h) + 1
        response = `${numbers[60 - m]} minutes to ${numbers[next_hour]}`
    }
    return response;
}

const h = "1"
const m = "1"
console.log(timeInWords(h, m))