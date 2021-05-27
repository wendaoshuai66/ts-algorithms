/**
 * @author liushuai
 * @description 实现链表
 */
import { isEqual } from "../../util";
class Node<NodeData = any> {
  constructor(
    public data: NodeData,
    public next: Node<NodeData> | null = null
  ) {}
}
class LinkedList<NodeData = any> {
  public head: Node<NodeData> | null;
  private size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  public append(data: NodeData): LinkedList<NodeData> {
    if (this.head === null) {
      this.head = new Node(data);
      this.size += 1;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(data);
    this.size += 1;
    return this;
  }
  public prepend(data: NodeData): LinkedList<NodeData> {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
    return this;
  }
  public removeNdoe(node: NodeData): LinkedList<NodeData> {
    if (this.head === null) {
      return null;
    }
    if (this.head.data === node) {
      this.head = this.head.next;
      node = null;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (isEqual(currentNode.next.data, node)) {
        currentNode.next = currentNode.next.next;
        node = null;
        this.size -= 1;
        return this;
      }
      currentNode = currentNode.next;
    }
    return this;
  }
}
const linkedList = new LinkedList<{ name: number }>();
linkedList
  .append({ name: 11 })
  .append({ name: 22 })
  .append({ name: 33 })
  .prepend({ name: 0 })
  .removeNdoe({ name: 11 });
console.log(JSON.stringify(linkedList));
export default LinkedList;
