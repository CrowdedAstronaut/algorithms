### Learn Lodash: isEqual, Check if Two Items Are Equal

Write your own version of the lodash \_.isEqual function using vanilla JavaScript (so, no external libraries - namely, lodash; don't import it). isEqual performs a deep comparison between two values to determine if they are equal. You can use it to compare arrays, booleans, dates, objects, sets, regexs, and typed arrays.

This is used as a helper function for many more advanced lodash functions in instances where comparison between objects or arrays is needed, but regular JavaScript comparison is too strict.

Arguments
value (can be anything): The first value to compare.
other (can be anything): The other value to compare against.
returns: (boolean): Returns true if they are the same, otherwise false.
Examples
const objects =
var object = { "a": 1 }
var other = { "a": 1 }
isEqual(object, other)
returns true
object === other
returns false
