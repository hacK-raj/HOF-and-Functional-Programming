const delayInSeconds = 3;
let remainingTime = delayInSeconds;

const countdownInterval = setInterval(() => {
  console.log(`Time remaining: ${remainingTime} seconds`);
  remainingTime--;

  if (remainingTime < 0) {
    clearInterval(countdownInterval);
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Generated random number: ${randomNumber}`);
  }
}, 1000);
