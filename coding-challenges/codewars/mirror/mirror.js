const mirror = (obj) => {
  obj = { ...obj };
  for (let i in obj) {
    obj[i] = i.split``.reverse().join``;
  }
  return obj;
};
