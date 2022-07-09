const count = (string) => {
  //create an empty object
  let object = {};
  //split the string which creates an array of keys for our object
  string
    .split("")
    .map((item) => (object[item] = object[item] + 1 || 1));
  //map through the array on each array item creating key value pairs for each item. Essentially
  //"pushing" the keys, and adding the values. {a:1} === object[item] upon
  //initialization. We increase the value by one each time a duplicate item is seen. Output of ("aba") == {a:2,b:1}
  return object;
};

console.log(count("aba"));
