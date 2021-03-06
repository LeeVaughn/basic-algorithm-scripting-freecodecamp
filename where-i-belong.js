// freeCodeCamp Basic Algorithm Scripting Challenge #15 //
// https://www.freecodecamp.org/challenges/where-do-i-belong //

// Where Do I Belong //
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. //
// The returned value should be a number. //
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    return num;
}

getIndexToIns([40, 60], 50);

// Solution //
function getIndexToIns(arr, num) {
    var combined = arr.concat(num).sort(function (a, b) {
        return a - b;
    });

    return combined.indexOf(num);
}

getIndexToIns([40, 60], 50);