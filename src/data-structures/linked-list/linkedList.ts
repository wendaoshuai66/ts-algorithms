/**
 * @author liushuai
 */
import { isEqual } from "../../util";
type TMapFunction<NodeData = any> = (data: NodeData, list: LinkedList) => void;
class LinkNode<NodeData = any> {
  constructor(
    public data: NodeData,
    public next: LinkNode<NodeData> | null = null
  ) {}
}
class LinkedList<NodeData = any> {
  public head: LinkNode<NodeData> | null;
  public size: number;
  constructor() {
    this.head = null;
  }

  public append(data: NodeData): LinkedList<NodeData> {
    if (this.head === null) {
      this.head = new LinkNode(data);
      this.size += 1;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new LinkNode(data);
    this.size += 1;
    return this;
  }
  public prepend(data: NodeData): LinkedList<NodeData> {
    const newNode = new LinkNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
    return this;
  }
  public clear(): LinkedList<NodeData> {
    this.head = null;
    this.size = 0;
    return this;
  }
  public removeNode(data: NodeData): LinkedList<NodeData> {
    if (this.head === null) {
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      if (isEqual(currentNode.next.data, data)) {
        this.size -= 1;
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }
    return this;
  }
  public reverse(): LinkedList<NodeData> {
    let currentNode = this.head;
    let prev = null;
    while (currentNode !== null) {
      const nextNode = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = nextNode;
    }
    this.head = prev;
    return this;
  }

  batchAppend(nodes: NodeData[]): LinkedList<NodeData> {
    for (const item of nodes) {
      this.append(item);
    }
    return this;
  }

  public forEach(f: TMapFunction<LinkNode<NodeData>>): LinkedList<NodeData> {
    let currentNode = this.head;
    while (currentNode !== null) {
      f(currentNode, this);
      currentNode = currentNode.next;
    }
    return this;
  }
}
const linkedList = new LinkedList<{
  name: string;
}>();
linkedList
  .append({ name: "111" })
  .append({ name: "222" })
  .append({ name: "333" })
  .prepend({ name: "000" });
linkedList.batchAppend([
  { name: "444" },
  { name: "555" },
  { name: "666" },
  { name: "777" },
]);
console.log(JSON.stringify(linkedList));
const reverseList = linkedList.reverse().prepend({ name: "-111" });
reverseList.forEach((node) => {
  console.log(node.data, "---data");
});
export default LinkedList;
