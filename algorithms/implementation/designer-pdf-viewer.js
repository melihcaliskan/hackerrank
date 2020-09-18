const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function designerPdfViewer(h, word) {
    let area = 0;
    let letter_heights = []
    for (let i = 0; i < word.length; i++) {
        const index = alphabet.findIndex(item => item === word[i])
        const height = h[index]
        letter_heights.push(height)
    }

    let tallest = Math.max.apply(null, letter_heights);
    area = tallest * parseInt(word.length)
    return area
}

const h = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7".split(' ')
const word = "zaba"
console.log(designerPdfViewer(h, word))