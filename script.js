// contact numbers
function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// search big number
function bigMax(numbers) {
    return Math.max(...numbers);
}

function reverse(str) {
    return str.split('').reverse().join('');
}
// delet items repeats
function removeNumbers(numbers) {
    return [...new Set(numbers)];
}

console.log(sumArray([1, 2, 3])); // 6
console.log(bigMax([1, 2, 3])); // 3
console.log(reverse("worrd")); // "olleh"
console.log(removeNumbers([1, 2, 2, 3])); // [1, 2, 3]