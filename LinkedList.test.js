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
      const ll = new LinkedList()
    })
  })
})
