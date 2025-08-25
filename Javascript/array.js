//1
let arr = [2, 4, 6, 8, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("Sum =", sum); // Output: 30


//2
let arr1 = [10, 20, 4, 45, 99];
let max = arr[0];

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
}
console.log("Max =", max); // Output: 99


//3
let arr2 = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr2.length - 1; i >= 0; i--) {
  reversed.push(arr2[i]);
}

console.log("Reversed =", reversed); // Output: [5, 4, 3, 2, 1]


//4
let arr3 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

for (let i = 0; i < arr3.length; i++) {
  if (!uniqueArr.includes(arr3[i])) {
    uniqueArr.push(arr3[i]);
  }
}
console.log("Unique =", uniqueArr); 


//5
let arr4 = [10, 20, 4, 45, 99];
let first = -Infinity, second = -Infinity;

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > first) {
    second = first;
    first = arr4[i];
  } else if (arr4[i] > second && arr4[i] !== first) {
    second = arr4[i];
  }
}
console.log("Second Largest =", second); 

