function findMatching(arr, name) {
    const newArr = arr.filter((currentName) => {
        return currentName.toUpperCase() === name.toUpperCase();
    })

    return newArr;
}

function fuzzyMatch(arr, letter) {
    return arr.filter((currentName) => 
        currentName.toUpperCase().indexOf(letter.toUpperCase()) === 0
    );
}



function matchName(arr, name) {
    const newArr = arr.filter((currentName) => {
        return currentName.name === name;
    })

    return newArr;
}