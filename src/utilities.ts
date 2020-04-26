export const numberToDecimal = (num: number): number => {
  let divisor = 1;
  let originalNum = num;
  while (num > 0) {
    num = Math.floor(num / 10);
    divisor *= 10;
  }
  return originalNum / divisor;
}
