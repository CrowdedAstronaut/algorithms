An integer is a divisor of an integer if the remainder of .

Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

Example

Check whether , and are divisors of . All 3 numbers divide evenly into so return .

Check whether , , and are divisors of . All 3 numbers divide evenly into so return .

Check whether and are divisors of . is, but is not. Return .

Function Description

Complete the findDigits function in the editor below.

findDigits has the following parameter(s):

int n: the value to analyze
Returns

int: the number of digits in that are divisors of
Input Format

The first line is an integer, , the number of test cases.
The subsequent lines each contain an integer, .

Constraints

Sample Input

2
12
1012
