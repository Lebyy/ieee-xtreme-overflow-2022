# Show the way
Shiva went on adventure to a mystic rectangular city having 'n' rows and 'm' columns. The city had charges(positive and negative) in each block. He entered the city from the top-left corner with zero charge and can leave the city from the bottom-right corner only. Shiva can only make out of there alive if it doesn't have any additional charges (considering positive and negative charges cancel each other). There is also a constraint on the movement of Shiva. He can only move down or right from a cell and can not make a move to the cell above or left of the current cell. Help shiva to find out if he can make it out of the city alive or not.

## Input Format

Each test contains multiple testcases. First line of input contains t, the number of testcases. Description of each testcase is as follows: First line of each testcase contains two space seperated integers n and m, the number of rows and columns respectively. Each of the following n lines contains m space seperated integers. The j-th integer on the i-th line is aij represents the charge in units at that cell.

## Constraints

`1 <= t <= 100 1 <= n <= 100 1 <= m <= 100 aij = 1 or -1`

## Output Format

For each testcase print "YES" or "NO" in a new line whether there exist a path with zero charge.

## Sample Input 0
```
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
```

## Sample Output 0
```
NO
YES
YES
YES
NO
```

## Explanation 0

one possible path for the 4th testcase

![alt text](https://s3.amazonaws.com/hr-assets/0/1664560697-098683c572-1659307576-d591fad575-ec89cd08933aec8a8d885927c0806a556ed1f6ed.png)

### Result
Our solution failed test case 0, 1, 2, 3, 4, 5 and 6 hence scoring 0 points.