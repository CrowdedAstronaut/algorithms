function sayHelloBye(name, num) {
  let capitalizedName = name
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  return num === 1
    ? `Hello ${capitalizedName}`
    : `Bye ${capitalizedName}`;
}

function sayHelloBye(name, num) {
  name = name[0].toUpperCase() + name.slice(1);

  return num === 1 ? `Hello ${name}` : `Bye ${name}`;
}

function sayHelloBye(name, num) {
  if (num == 1)
    return (
      "Hello " +
      name.charAt(0).toUpperCase() +
      name.slice(1)
    );
  else
    return (
      "Bye " + name.charAt(0).toUpperCase() + name.slice(1)
    );
}
