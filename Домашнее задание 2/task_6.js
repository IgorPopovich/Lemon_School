function maxDelitel(a, b) {
  if (b === 0) {
    return a;
  }
  return maxDelitel(b, a % b);
}
maxDelitel(5, 25);