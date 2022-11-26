function fixArray(array) {
  return array
    .filter((array_item, index) => arr.indexOf(array_item) === index)
    .sort((a, b) => a - b);
}
let arr = [3, 26, 1, 2, 3, 44, 57, 87, 1];
let fixedArr = fixArray(arr);
console.log(fixedArr);

// result should be [1, 2, 3, 26, 44, 57, 87]
