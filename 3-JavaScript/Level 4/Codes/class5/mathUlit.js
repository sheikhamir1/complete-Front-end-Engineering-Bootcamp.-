export const pi = 3.14159;

export function calculateArea(radius) {
  return pi * radius * radius;
}

function internalLog(message) {
  console.log(`System log ${message}`);
}
