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
