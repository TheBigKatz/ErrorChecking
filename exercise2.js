function asyncAdd(x, y, callback) {
  setTimeout(function() {
    if (typeof x !== 'number' || typeof y !== 'number') {
      callback(new Error('Arguments must be numbers'));
      return;
    }
    callback(x + y);
  }, 1000);
}

try {
  asyncAdd('a', 'b', function(err, result){
    console.log(err);
    console.log(result);
  });
} catch (e) {
  console.log('Caught error:', e.message);
}
