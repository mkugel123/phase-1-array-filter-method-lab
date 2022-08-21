function findMatching(drivers, name) {
    return drivers.filter(function (matchingName) {
        return matchingName.toUpperCase() === name.toUpperCase();
    });

}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(function (name) {
        return name.startsWith(letter)
    })
}

function matchName(drivers, name) {
    return drivers.filter(function (matchingName) {
        return matchingName.name === name;
     })
}