// const isValid = (str) => {
//   const map = new Map();
//   map.set("{", "}");
//   map.set("(", ")");
//   map.set("[", "]");
//   const b = [];
//   for (let i = 0; i < str.length; i++) {
//     if (map.has(str.charAt(i))) {
//       b.push(str.charAt(i));
//     } else {
//       let pop = b.pop();
//       if (map.get(pop) !== str.charAt(i)) {
//         return false;
//       }
//     }
//   }
//   return b.length === 0;
// };

// const isValid = function (s) {
//   const stack = [];
//   const characters = { ")": "(", "}": "{", "]": "[" };
//   for (const char of s) {
//     if (!characters[char]) {
//       stack.push(char);
//     } else if (stack.pop() !== characters[char]) {
//       return false;
//     }
//   }
//   return stack.length === 0;
// };

const isValid = (s) => {
  const REGEX = /[(\[][^\)\]]*?[)\]]/g;
  return REGEX.test(s);
};

isValid("()");
