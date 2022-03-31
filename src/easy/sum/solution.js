function sumNum(thousand) {
  let sum = 0;
  for (let i = 1; i <= thousand; i++) {
    //console.log("i", i);
    sum += i;
  }
  return sum;
}

console.log(sumNum(1000));
