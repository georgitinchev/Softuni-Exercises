function prime(number) {
  let isPrime = true;
  if (number < 2) {
    isPrime = false;
  }
  let root = Math.ceil(Math.sqrt(number));
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
  console.log(isPrime);
}
