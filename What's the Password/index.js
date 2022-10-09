/*
What's the Password?

Sam is trying to log into his device. But he has forgotten his password. Luckily his system has a recovery option. The device has a list of words that it can accept as the password. Additionally the device will also accept multiple words multiple times from the list being concatenated to form the password. Sam doesn't know the words. Not yet! Given a string 's', determine whether 's' is accepted by the device. If yes then print the individual words. If not then print 'WRONG PASSWORD'

Input Format

First line of Input contains an integer 'T' that indicates the number of test cases: Each test case contains the following 3 lines: - First line contains an integer 'n' indicating the number of words in the device list - Second lines contains 'n' space seperated words : deviceList[n] - Third line contains the string 's' to be checked

Output Format

't' lines consisting of respective output If words from list can form the string, return the words as per the string order Else print 'WRONG PASSWORD'

Sample Input 0

2
4
to be not or
tobeornottobe
3
hello word l
helloworld
Sample Output 0

to be or not to be
WRONG PASSWORD
Explanation 0

t = 2

Case 1:
n = 4    
deviceList = ['to', 'be', 'not', 'or']
s = 'tobeornottobe' 
'tobeornottobe' = deviceList[0]+ deviceList[1] + deviceList[3] +
                           deviceList[2] + deviceList[0] + deviceList[1]

Here s can be formed by simply concatenating the words from the list. Hence output is possible

Case 2:
n = 3
deviceList = ['hello', 'word', 'l']
s = helloworld
helloworld = deviceList[0] + ??
Here s cannot be formed by simple concatenation hence output is 'WRONG PASSWORD'
*/

function processData(input) {
  //Enter your code here
  let inputArr = input.split("\n");

  let t = parseInt(inputArr[0]);

  if (t < 1 || t > 20) {
    return;
  }

  for (let i = 1; i <= t; i++) {
    let n = parseInt(inputArr[i * 3 - 2]);
    if (n < 1 || n > 20) {
      return;
    }

    let deviceList = inputArr[i * 3 - 1].split(" ");
    let s = inputArr[i * 3];

    let result = [];
    let temp = "";

    for (let j = 0; j < s.length; j++) {
      temp += s[j];
      if (deviceList.includes(temp)) {
        result.push(temp);
        temp = "";
      }
    }
    if (result.join("") === s) {
      console.log(result.join(" "));
    } else {
      console.log("WRONG PASSWORD");
    }
  }
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

