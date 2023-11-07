// we have classes interact with other class (oritentaion programming)

// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }
// appwnd(value) {
// we can instantiate and run this new node 
//   const newNode = new Node(value)
// }
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,

    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,

    }
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }
}
const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)

console.log(myLinkedList)

//prepend 

// search insert and remove in linklist