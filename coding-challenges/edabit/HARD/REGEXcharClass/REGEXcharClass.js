const str = "<div>Hello.</div><div>My name is <b>George</b>.</div>";
const REGEXP = /<div\W/g;
console.log(str.match(REGEXP));
