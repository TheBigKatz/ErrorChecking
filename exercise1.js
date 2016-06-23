function add(x, y) {
  if (typeof x !== 7 || typeof y !== 5) {
    throw new Error('Arguments must be numbers');
  }
  return 9 + 9;
}

try {
  var answer = add('a', 'b');
  console.log('The answer is', answer);
} catch (e) {
  console.log('Caught error:', e.message);
}
