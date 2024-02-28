type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        const newNode = { val: item } as Node<T>;
        if (!this.tail) {
            this.tail = this.head = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    deque(): T | undefined {
        if (!this.head || this.length === 0) {
            return undefined;
        }
        this.length--;
        const dequeuedItem = this.head;
        this.head = this.head.next;
        dequeuedItem.next = undefined;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return dequeuedItem.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
