var map = function(arr, fn) {
  // return arr.map(fn);
  const res = new Array(arr.length);
  
  for( const n in arr ) {
    res[n] = fn(n);
  }
  return res;
}
