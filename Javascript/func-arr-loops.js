// 1. Factorial of a Number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log("Factorial of 5:", factorial(5));


// 2. Count Vowels in String
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Vowels in 'Hello World':", countVowels("Hello World"));


// 3. Check Prime Number
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("Is 7 prime?", isPrime(7));


// 4. Array Rotation
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
}
console.log("Rotate [1,2,3,4,5] by 2:", rotateArray([1, 2, 3, 4, 5], 2));



// 5. Frequency Counter
function countFrequency(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}
console.log("Frequency of [1,2,2,3]:", countFrequency([1, 2, 2, 3])); 