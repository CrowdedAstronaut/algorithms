function removeUrlAnchor(url) {
  let array = url.split("#");
  return array[0];
}

removeUrlAnchor("www.codewars.com#about");
