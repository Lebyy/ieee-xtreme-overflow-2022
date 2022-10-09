# SubArray
Cristiano has a list of 'N' integers. The integers in this list are not unique or sorted in any specific order. Cristiano wants to find the smallest array that can be formed from within this array that can contain both the minimum and maximum values in the original array.

## Input Format
First line contains a integer 'N' denoting number of elements in original array. Second line contains a N space-seperated integers - V[n]

## Constraints
`n, V[i] ∈ R n, V[i] < 10^6`

## Output Format
Integer denoting length of smallest sub array

## Sample Input 0
```
8 
1 6 99 3 1 10 0 5
```

## Sample Output 0
```
5
```

## Explanation 0
```
The minimum number is 0
The maximum number is 99
The array having both 0 and 99 and being the shortest in length is [99 3 1 10 0]

Hence Output is 5
```

### Result
Our solution passed test case 0, 1, 2, 3 and failed test case 4 and 5 hence scoring 70 points.