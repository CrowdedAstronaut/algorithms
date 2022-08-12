const isAnagram = (s, t) => [...t].sort().join("") === [...s].sort().join("");

isAnagram("anagram", "nagaram");
