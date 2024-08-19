const urlPattern = /^(https?:\/\/)[\w\-]+(\.[\w\-]+)+$/;

function validateURL(url) {
  if (urlPattern.test(url)) {
    console.log("Valid URL");
  } else {
    console.log("Invalid URL");
  }
}


validateURL("https://example.com");
validateURL("http://test.com");
validateURL("invalid-url");
