// Create your own LinkedList class for storing integers which should include two methods:
// add(number) - Add a new Node to the end of the list with a value of number. Nothing needs to be returned. get(index) - Return the value of the Node at position index in the List.


class Node {
    constructor(value, next_node = null) {
      this.value = value;
      this.next_node = next_node;
    }
  }
  
  class LinkedList {
    // Setup head and tail
    constructor() {
      this.head = null; // The first node of the list
      this.tail = null; // The last node of the list
    }
  
    add(number) {
      // Create a new node with the given number
      const newNode = new Node(number);
  
      // If the list is empty, make the new node the head and tail
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        // Otherwise, add the new node to the end of the list
        this.tail.next_node = newNode;
        this.tail = newNode;
      }
    }
  
    get(index) {
      // Start at the head node
      let current = this.head;
      let count = 0;
  
      // Traverse the list until the index is reached
      while (current !== null) {
        if (count === index) {
          return current.value; // Return the value at the given index
        }
        count++;
        current = current.next_node; // Move to the next node
      }
  
      return null; // If the index is out of bounds, return null
    }
  }
  
  const list = new LinkedList();
  
  list.add(3);
  list.add(5);
  console.log(list.get(1)); // => 5
  
  module.exports = LinkedList;
  
  