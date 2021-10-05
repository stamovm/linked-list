const LinkedList = require('./LinkedList')

const ll = LinkedList.fromValues(10, 20, 30, 40, 50)

ll.print()
console.log(ll.getByIndex(2).value)
ll.removeAtIndex(2)
ll.print()
