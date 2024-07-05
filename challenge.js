//create a Queue with add and remove methods and ensure that calling remove on an empty queue returns -1

class Queue {
  constructor() {
    this.items = [];
  }

  add(number) {
    // your code here
    this.items.push(number);
  }
  
  remove() {
    // your code here
    if (this.items.length === 0) {
      return -1;
    } else {
      return this.items.shift();
    }
  }
}

const queue = new Queue();

queue.add(3);
queue.add(5);
console.log(queue.remove()); 
// => 3

queue.add(2);
queue.add(7);
console.log(queue.remove()); 
// => 5

console.log(queue.remove()); 
// => 2

console.log(queue.remove()); 
// => 7

console.log(queue.remove()); 
// => -1

module.exports = Queue;
