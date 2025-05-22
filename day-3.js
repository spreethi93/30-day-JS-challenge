class Counter {
  constructor(n) {
    this.n = n;
      this.initialVal = n;
  }
  increment() {
    return ++this.n;
  }
decrement () {
    return --this.n;
  }
    reset () {
        this.n =this.initialVal;
        return this.n;
    };
}

var counterFn = new Counter(5);
console.log(counterFn.increment());//6
console.log(counterFn.reset());//5
console.log(counterFn.decrement());//4
