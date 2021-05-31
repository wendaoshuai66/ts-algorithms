class DoublyLinkNode<NodeData = any> {
  constructor(
    public data: NodeData,
    public prev: DoublyLinkNode<NodeData> | null = null,
    public next: DoublyLinkNode<NodeData> | null = null
  ) {}
}
class DoublyLinkedList<NodeData = any> {
  public head: DoublyLinkNode<NodeData>;
  constructor() {
    this.head = null;
  }

  public append(data: NodeData): DoublyLinkedList<NodeData> {
    const newNode = new DoublyLinkNode(data);
    if (this.head === null) {
      this.head = newNode;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    newNode.prev = currentNode;
    return this;
  }

  public prepend(data: NodeData): DoublyLinkedList<NodeData> {
    const newNode = new DoublyLinkNode(data);
    if (this.head === null) {
      this.head = newNode;
      return this;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    return this;
  }
  public batchAppend(data: NodeData[]): DoublyLinkedList<NodeData> {
    for (const item of data) {
      this.append(item);
    }
    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList<{ name: string }>();
doublyLinkedList
  .prepend({ name: "1111" })
  .append({ name: "2222" })
  .batchAppend([{ name: "333" }, { name: "44444" }])
  .prepend({ name: "000" });
console.log(doublyLinkedList);
export default DoublyLinkedList;
