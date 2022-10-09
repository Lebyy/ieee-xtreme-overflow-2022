# School Assembly Line
Your School has a weekly assembly for all students to attend. Students are expected to stand in a straight line according to height i.e. in increasing order of heights but some students didn't follow this rule and stood randomly in the queue. Help homeroom teacher find the sum of number of students standing behind each student in queue with lower height than that student i.e. for each student, find number of students standing behind him/her with lower height and add it to the answer.

## Input Format

First line contains an integer 'T', denoting number of test cases.

For each test case: First line contains an integer 'N', denoting the size of the array 'A'. Next line contains 'N' space seperated integers 'A[i]', denoting the heights of the students.

## Constraints

`1 <= T <= 10 1 <= N <= 10^3 1 <= Ai <= 10^5`

## Output Format

For each test case, print an integer in a new line.

## Sample Input 0
```
2
5
5 4 8 1 5
5 
7 1 2 3 5 
```

## Sample Output 0
```
5
4
```

## Explanation 0
```
Case 1:
A[0] - There are 2 students with height shorter than 5 - [4,1]
A[1] - There is 1 student with height shorter than 4 - [1]
A[2] - There is 2 student with height shorter than 8 - [1,5]
A[3] - There is 0 student with height shorter than 1 
A[4] - There is 0 student with height shorter than 5 

Hence output is 5

Case 2:
A[0] - There is 4 student with height shorter than 7
A[1] - There is 0 student with height shorter than 1
A[2] - There is 0 student with height shorter than 2
A[3] - There is 0 student with height shorter than 3
A[4] - There is 0 student with height shorter than 5

Hence output is 4
```

### Result
Our solution passed test case 0, 2 and 3 and failed test case 1 hence scoring 44.44 points.