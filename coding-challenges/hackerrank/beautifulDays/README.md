int j: the ending day number
int k: the divisor
Returns

int: the number of beautiful days in the range
Input Format

A single line of three space-separated integers describing the respective values of , , and .

Constraints

Sample Input

20 23 6
Sample Output

2
Explanation

Lily may go to the movies on days , , , and . We perform the following calculations to determine which days are beautiful:

Day is beautiful because the following evaluates to a whole number:
Day is not beautiful because the following doesn't evaluate to a whole number:
Day is beautiful because the following evaluates to a whole number:
Day is not beautiful because the following doesn't evaluate to a whole number:
Only two days, and , in this interval are beautiful. Thus, we print as our answer.
