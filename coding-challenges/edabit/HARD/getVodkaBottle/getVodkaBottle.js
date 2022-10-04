function getVodkaBottle(obj, num) {
  const RAMMSTEIN_REG = new RegExp("Rammstein");
  return Object.entries(obj).filter(
    ([key, value]) =>
      RAMMSTEIN_REG.test(key) && value === num
  )[0][0];
}

const getVodkaBottle = (obj, num) =>
  Object.keys(obj).find(
    (key) => key.includes("Rammstein") && obj[key] === num
  );
