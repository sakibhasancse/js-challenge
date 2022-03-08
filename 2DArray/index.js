
var numberGrid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

for (let i = 0; i < numberGrid.length; i++) {
  for (let j = 0; j < numberGrid[i].length; j++) {
    document.write(`<button id="btn${numberGrid[i][j]}">${numberGrid[i][j]}</button>`)
  }
  document.write('<br/>')
}


const btn5 = document.getElementById('btn5')
btn5.addEventListener('click', () => {
  const first = btn1.innerHTML;
  btn1.innerHTML = btn4.innerHTML;
  btn4.innerHTML = btn7.innerHTML;
  btn7.innerHTML = btn8.innerHTML;
  btn8.innerHTML = btn9.innerHTML;
  btn9.innerHTML = btn6.innerHTML;
  btn6.innerHTML = btn3.innerHTML;
  btn3.innerHTML = btn2.innerHTML;
  btn2.innerHTML = first
})


//Functions

const factorial = (n) => {
  var x = 1;

  for (var i = n; i > 0; i--) {
    x = x * i
  }
  return x;
}

function main() {
  const n = +(readLine());

  console.log(factorial(n));
}


/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

function getSecondLargest(nums) {
  // Complete the function
  let largestNumber = 0;
  let secondLargest = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > largestNumber) {
      secondLargest = largestNumber;
      largestNumber = nums[i]
    } else if (largestNumber === secondLargest || nums[i] > secondLargest) {
      secondLargest = nums[i]
    }
  }
  return secondLargest
}
getSecondLargest([23,2,3,4,5]);