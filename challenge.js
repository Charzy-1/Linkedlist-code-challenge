// Create a Stack with two methods push and pop.
class Stack {
  constructor() {
    this.items = [];
  }

  push(number) {
    // your code here
    this.items.push(number);
  }

  pop() {
    // your code here
    if (this.items.length == 0) {
      return "empty array";
    } else {
      return this.items.pop();
    }
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
console.log(stack.pop()); 
// => 5

stack.push(2);
stack.push(7);
console.log(stack.pop()); 
// => 7

console.log(stack.pop()); 
// => 2

console.log(stack.pop()); 
// => 3

module.exports = Stack;
