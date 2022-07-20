function meeting(s) {
  let names = s.toUpperCase().split(";");
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].split(":").reverse();
  }
  return names.sort().reduce((acc, name) => {
    return (acc += `(${name[0]}, ${name[1]})`);
  }, "");
}

console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);
