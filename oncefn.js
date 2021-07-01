function add (a, b) {
  return a + b
}

function once(func) {
    let remember;
    return function() {
      if (!!remember) return remember;
      remember = func.apply(this, arguments);
      return remember;
    }
}

const onceAdd = once(add); 

console.log(onceAdd(5,3))
console.log(onceAdd(2,3))
console.log(onceAdd(2,10))