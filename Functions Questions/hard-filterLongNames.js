function filterLongNames(arr) {
    const elements = arr.filter(name => name.length > 5);
    return elements;
}

let arr = ["madhav", "manu", "vaibhav", "jatin"];
console.log(filterLongNames(arr));