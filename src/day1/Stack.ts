type Node<T> = {
    val: T;
    prev?: Node<T>;
};
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const newNode = { val: item } as Node<T>;
        if (!this.head) {
            this.head = newNode;
            return;
        }
        newNode.prev = this.head;
        this.head = newNode;
    }
    pop(): T | undefined {
        if (!this.head) return undefined;
        this.length--;
        const poppedItem = this.head;
        if (this.length === 0) {
            this.head = undefined;
            return poppedItem.val;
        }
        this.head = this.head.prev;
        poppedItem.prev = undefined;
        return poppedItem.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
