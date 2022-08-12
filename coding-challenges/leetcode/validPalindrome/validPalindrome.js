const isPalindrome = (s) => {
  const replaced = s.toLowerCase("").replace(/[^a-z0-9]/gi, "");
  return replaced === replaced.split("").reverse().join("");
};
isPalindrome("A man, a plan, a canal: Panama");
