const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidLocation;
let k;

for (k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}

console.log(`There were ${k} locations displayed`)