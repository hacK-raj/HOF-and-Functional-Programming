const linkedInPattern =
  /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;

function validateLinkedInURL(url) {
  if (linkedInPattern.test(url)) {
    console.log("Valid LinkedIn Profile URL");
  } else {
    console.log("Invalid LinkedIn Profile URL");
  }
}


validateLinkedInURL("https://www.linkedin.com/in/rajdeep-seal-290b2b2b6");
validateLinkedInURL("https://www.linkedin.com/in/invalid-url!");
