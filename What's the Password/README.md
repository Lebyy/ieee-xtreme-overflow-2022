# What's the Password?
Sam is trying to log into his device. But he has forgotten his password. Luckily his system has a recovery option. The device has a list of words that it can accept as the password. Additionally the device will also accept multiple words multiple times from the list being concatenated to form the password. Sam doesn't know the words. Not yet! Given a string 's', determine whether 's' is accepted by the device. If yes then print the individual words. If not then print 'WRONG PASSWORD'

## Input Format
First line of Input contains an integer 'T' that indicates the number of test cases: Each test case contains the following 3 lines: - First line contains an integer 'n' indicating the number of words in the device list - Second lines contains 'n' space seperated words : deviceList[n] - Third line contains the string 's' to be checked

## Constraints
`1 < t < 20 1 < n < 20`

*s and deviceList contain Alphanumeric characters

## Output Format
`'t' lines consisting of respective output If words from list can form the string, return the words as per the string order Else print 'WRONG PASSWORD'`

## Sample Input 0
```
2
4
to be not or
tobeornottobe
3
hello word l
helloworld
```

## Sample Output 0
```
to be or not to be
WRONG PASSWORD
```

## Explanation 0
```
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
```

### Result
Our solution passed test case 0, but failed test case 1, 2 and 3 hence scoring 0 points.