export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(factor1: number, factor2: number): number {
  return factor1 * factor2; 
}

export function divide(dividend: number, divisor: number): number {
  if(divisor !== 0){
    return dividend / divisor
  }
  else{
    throw new Error("Division by zero is not allowed.");
  }
}