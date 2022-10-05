function hello(name) {
  return name
    ? "Hello, " +
        name[0].toUpperCase() +
        name.slice(1).toLowerCase() +
        "!"
    : "Hello, World!";
}

console.log(hello("john"));
