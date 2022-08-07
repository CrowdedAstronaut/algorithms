function isJS(path) {
  let fileExtension = path.match(/\b\w+\b/g).pop();
  return fileExtension === "jsx" || fileExtension === "js" ? true : false;
}

isJS("/users/user.jsx");

const isJS = (path) => /\.(js|jsx)$/g.test(path);

function isJSX(path) {
  return path.endsWith(".jsx") || path.endsWith(".js");
}
