const LinkedList = require('./LinkedList')

describe('#insertAtHead', () => {
  test('Adds the element to the beginning of the list', () => {
    const ll = new LinkedList()
    ll.insertAtHead(10)
    const oldHead = ll.head
    ll.insertAtHead(20)

    expect(ll.head.value).toBe(20)
    expect(ll.head.next).toBe(oldHead)
    expect(ll.length).toBe(2)
  })
})

describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    test('Returns null', () => {
      const ll = LinkedList.fromValues(10, 20)
      expect(ll.getByIndex(-1)).toBeNull()
    })
  })
})

describe('with index greater than index length', () => {
  test('Returns null', () => {
    const ll = LinkedList.fromValues(10, 20)
    expect(ll.getByIndex(5)).toBeNull()
  })
})

describe('with index 0', () => {
  test('Returns the head of the list', () => {
    const ll = LinkedList.fromValues(10, 20)
    expect(ll.getByIndex(0).value).toBe(10)
  })
})

describe('with index 0', () => {
  test('Returns the element at that index', () => {
    const ll = LinkedList.fromValues(10, 20, 30, 40, 50)
    expect(ll.getByIndex(2).value).toBe(30)
  })
})
describe('with index in the middle', () => {
  test('remove at the given index', () => {
    const ll = LinkedList.fromValues(10, 20, 30, 40)
    ll.removeAtIndex(2)
    const node = ll.getByIndex(1)

    expect(node.value).toBe(20)
    expect(node.next.value).toBe(40)
    expect(ll.length).toBe(3)
  })
})
