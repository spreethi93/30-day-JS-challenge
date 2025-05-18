const createCounterFn = function(){
  let counter = 1;
  return function() {
    return counter++;
  }
}

var counterFn = createCounterFn();
counterFn();//1
counterFn();//2

class Counter {
  constructor(n) {
    this.n = n;
  }
  increment() {
    return this.n++;
  }
}

var counterFn = new Counter(1);
counterFn.increment();//1
counterFn.increment();//2
