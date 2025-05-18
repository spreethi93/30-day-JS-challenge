const createHelloWorldFunc = function(args) {
  return function(...args) {
    return 'Hello World!';
  }
};
