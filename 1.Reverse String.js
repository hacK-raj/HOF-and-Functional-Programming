const input = "Hello, World!";
setTimeout(() => {
  const reversedString = input.split("").reverse().join("");
  console.log(reversedString);
}, 2000); 
