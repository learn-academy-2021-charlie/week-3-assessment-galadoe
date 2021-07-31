// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.


// a) Create a test with expect statements for each of the variables provided.
describe("FibNum", () => {
    test("returns an array the length containg the num of fib", () => {
      expect(fibNum(6)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibNum(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.

//create a function that takes in num
//have an empty array that will later take the ending result
// create a loop that will help to create the sequence
//push the sequence
// return the array with the sequence

function fibNum (num) {
  let fib = [0, 1]
  let fibNumber = [1]

  for(let i = 2; i <= num; i++){
    fib[i] = fib[i - 1] + fib[i - 2];
    fibNumber.push(fib[i]);
  }
  return fibNumber;
}
console.log(fibNum(6));


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("leastToGreatest", () => {
  it("returns odd numbers l to g", () => {
    expect(leastToGreatest(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(leastToGreatest(fullArr2)).toEqual([-823, 7, 23])
  })
})
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

//create a function and takes an array
//create a for loop that loops through the array looking for typeOf number (try to use if you can use a higer order function)
//once all the typeOf numbers are found, put it in order from least to leastToGreatest
//return the new array of numbers put in order from least to greatest

const leastToGreatest = (nums) => {
  let oddNums = []
  for(let i = 0; i < nums.length; i++){
    if(typeof nums[i] === "number" && nums[i] % 2 !== 0){
      oddNums.push(nums[i])
    }
  }
  return oddNums.sort((a,b) => a - b)
}
console.log(leastToGreatest(fullArr1));
console.log(leastToGreatest(fullArr2));



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("sum", () => {
  it("returns an array of accumlating sum", () => {
    expect(arraySum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(arraySum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(arraySum(numbersToAdd3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.

//create a function that takes in an array
//the array is iterated through (or try to use a higher order function to shorten the steps)
//the previous index is compared to the next index
//those two index are added and that number is saved and printed (as an array)
//the saved num is add to the next num in the arrays and printed as well
//continue to do this until the array is over

const arraySum = (arrayNum) => {
  let newSum = []
  for(let i = 1; i < arrayNum.length; i++){
    if(i === 0){
      newSum[i] = arrayNum[i]
      // newSum[i] = newSum[i - 1] + arrayNum[i]
    }
  }
  return newSum
}
console.log(arraySum([2, 4, 45, 9]));


var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []
