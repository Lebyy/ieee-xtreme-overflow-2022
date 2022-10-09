/*
Show the way

Shiva went on adventure to a mystic rectangular city having 'n' rows and 'm' columns. The city had charges(positive and negative) in each block. He entered the city from the top-left corner with zero charge and can leave the city from the bottom-right corner only. Shiva can only make out of there alive if it doesn't have any additional charges (considering positive and negative charges cancel each other). There is also a constraint on the movement of Shiva. He can only move down or right from a cell and can not make a move to the cell above or left of the current cell. Help shiva to find out if he can make it out of the city alive or not.

Input Format

Each test contains multiple testcases. First line of input contains t, the number of testcases. Description of each testcase is as follows: First line of each testcase contains two space seperated integers n and m, the number of rows and columns respectively. Each of the following n lines contains m space seperated integers. The j-th integer on the i-th line is aij represents the charge in units at that cell.

Constraints

1 <= t <= 100 1 <= n <= 100 1 <= m <= 100 aij = 1 or -1

Output Format

For each testcase print "YES" or "NO" in a new line whether there exist a path with zero charge.

Sample Input 0

5
1 1
1
1 2
1 -1
1 4
1 -1 1 -1
3 4
1 -1 -1 -1
-1 1 1 -1
1 1 1 -1
3 4
1 -1 1 1
-1 1 -1 1
1 -1 1 1

Sample Output 0

NO
YES
YES
YES
NO

Explanation 0

one possible path for the 4th testcase
https://s3.amazonaws.com/hr-assets/0/1664560697-098683c572-1659307576-d591fad575-ec89cd08933aec8a8d885927c0806a556ed1f6ed.png
*/

function processData(input) {
  //Enter your code here
  let inputArr = input.split("\n");
  let testCases = parseInt(inputArr[0]);
  let i = 1;

  while (testCases--) {
    let [n, m] = inputArr[i++].split(" ").map(Number);
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(inputArr[i++].split(" ").map(Number));
    }
    let dp = [];
    for (let j = 0; j < n; j++) {
      dp.push(new Array(m).fill(0));
    }
    dp[0][0] = arr[0][0];
    for (let j = 1; j < n; j++) {
      dp[j][0] = dp[j - 1][0] + arr[j][0];
    }
    for (let j = 1; j < m; j++) {
      dp[0][j] = dp[0][j - 1] + arr[0][j];
    }
    for (let j = 1; j < n; j++) {
      for (let k = 1; k < m; k++) {
        dp[j][k] = Math.min(dp[j - 1][k], dp[j][k - 1]) + arr[j][k];
      }
    }
    console.log(dp[n - 1][m - 1] === 0 ? "YES" : "NO");
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
