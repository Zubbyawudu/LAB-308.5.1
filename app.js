// PART 1 

// Take an array of numbers and return the sum

let sum = 0
// create numArr 

let numArr = [2,4,9,5,4,5]

numArr.forEach(x => {
  sum += x
  
});
console.log(sum);

// Take an Array of numbers and return the Average

let sum1 = 0
// create numArr 

let numArr2 = [2,4,9,5,4,5]
// to create an average in this case , you have to divide the sum of the array by the length . 
numArr.forEach(x => {
  sum1 += x
  avg = sum1 / numArr2.length
  
  
});
console.log(avg);

// Take an array of strings and return the longest string.

let stringArr = ["photosynthesis","halloween", "king"]

// to check the longest string 

const getLongestString = (stringArr) => {
  
  let longest = "";
  stringArr.forEach(str => {
    if (str.length > longest.length) {
      longest = str;
      
    }
  });

  return longest ; 
}
console.log(getLongestString(stringArr));


// Take an array of strings, and a number and return an array of the strings that are longer than the given number ... 

let strings = ["mercury","gold","diamond" ,"silver"]
let minLength = 5

// Write your function , declare parameters
function stringsLongerThan(arr , minLength) {
  // using the filter() method , because it construct a new array if the value is true . 
  return arr.filter(str => str.length > minLength);
  
}
console.log(stringsLongerThan(strings, minLength)); 

// Take a number n, and print every number between 1 and n without using loops. Use recursion.

function printedNumber(n ,i = 1) {
  if (i <= n){
    console.log(i);
    printedNumber(n, i + 1)
  }
  
}
printedNumber(10)

