function catAndMouse(catA, catB, mouse) {
    const diffA = Math.abs(catA - mouse)
    const diffB = Math.abs(catB - mouse)
    if (diffA > diffB) {
       return "Cat B"
    } else if (diffB > diffA) {
        return "Cat A"
    } else {
        return "Mouse C"
    }
}

catAndMouse(1, 2, 3)