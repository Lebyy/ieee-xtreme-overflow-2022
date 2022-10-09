/*
SubArray

Cristiano has a list of 'N' integers. The integers in this list are not unique or sorted in any specific order. Cristiano wants to find the smallest array that can be formed from within this array that can contain both the minimum and maximum values in the original array.

Input Format
First line contains a integer 'N' denoting number of elements in original array. Second line contains a N space-seperated integers - V[n]

Constraints
n, V[i] ∈ R n, V[i] < 10^6

Output Format
Integer denoting length of smallest sub array

Sample Input 
8 
1 6 99 3 1 10 0 5

Sample Output 
5

Explanation
The minimum number is 0
The maximum number is 99
The array having both 0 and 99 and being the shortest in length is [99 3 1 10 0]

Hence Output is 5
*/

function processData(input) {
  //Enter your code here
  let inputArr = input.split("\n");
  let n = parseInt(inputArr[0]);

  let V = inputArr[1];
  if (!V) return;
  V = V.split(" ").map((x) => parseFloat(x));

  let min = Math.min(...V);
  let max = Math.max(...V);

  let minIndex = V.indexOf(min);
  let maxIndex = V.indexOf(max);

  let newArr = [];
  if (minIndex > maxIndex) {
    newArr = V.slice(maxIndex, minIndex + 1);
  } else {
    newArr = V.slice(minIndex, maxIndex + 1);
  }

  let len = newArr.length;

  console.log(len);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});

