function detectBrowser(userAgent) {
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "Google Chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "Mozilla Firefox";
  } else {
    browserName = "Internet Explorer";
  }
  return browserName;
}

const detectBrowser = (userAgent) => {
  return [
    {
      rgx: /(MSIE)|(Explorer)/g,
      name: "Internet Explorer",
    },
    {
      rgx: /Firefox/g,
      name: "Mozilla Firefox",
    },
    {
      rgx: /Chrome/g,
      name: "Google Chrome",
    },
  ].find((e) => e.rgx.test(userAgent)).name;
};

function detectBrowser2(userAgent) {
  if (userAgent.includes("Firefox")) {
    return "Mozilla Firefox";
  } else if (userAgent.includes("Chrome")) {
    return "Google Chrome";
  } else {
    return "Internet Explorer";
  }
}
