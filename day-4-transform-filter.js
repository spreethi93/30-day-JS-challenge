function myFilter(arr,fn) {
    const res = new Array();
    for(let i=0 ; i<arr.length ; i++) {
      if(fn(arr[i])) res.push(arr[i]);
    }
  return res;
}
