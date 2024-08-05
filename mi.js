function computeM2(l, s) {
  const m2 = l + (l < 0.5 ? l : 1 - l) * s;
  return m2;
}

// Example usage
let l = 0.4;
let s = 0.7;
let result = computeM2(l, s);
console.log(result); // Outputs: 0.6799999999999999
