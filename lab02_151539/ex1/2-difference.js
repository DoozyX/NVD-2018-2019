
function difference(array1, array2) {
    const set = new Set();
    array1.forEach(item => set.add(item));
    array2.forEach(item => set.add(item));
    return set.toArray();
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));