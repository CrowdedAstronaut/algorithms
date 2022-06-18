function asciiCapitalize(str) {
  return str
    .split("")
    .map((char) =>
      char.charCodeAt() % 2 === 0
        ? char.toUpperCase()
        : char.toLowerCase()
    )
    .join("");
}
