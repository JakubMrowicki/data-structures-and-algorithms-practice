type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        this.length++;
        const node = { val: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    insertAt(item: T, idx: number): void {
        if (!this.head) return;

        const newNode = { val: item } as Node<T>;

        if (idx === 0) {
            this.length++;
            if (this.head.next) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                this.head = this.tail = newNode;
            }
            return;
        }

        let nodeIdx = 1;
        let prev = this.head;
        let node = this.head.next;

        while (node) {
            if (nodeIdx === idx) {
                this.length++;
                if (node === this.tail) {
                    newNode.next = node;
                    prev.next = newNode;
                } else {
                    prev.next = newNode;
                    newNode.next = node;
                }
                return;
            }
            prev = node;
            node = node.next;
            nodeIdx++;
        }

        if (nodeIdx === idx) {
            this.length++;
            prev.next = newNode;
            this.tail = newNode;
        }
    }
    append(item: T): void {
        this.length++;
        const node = { val: item } as Node<T>;
        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    remove(item: T): T | undefined {
        if (!this.head) return undefined;
        if (this.head.val === item) {
            this.length--;
            if (this.head.next) {
                this.head = this.head.next;
            } else {
                this.head = this.tail = undefined;
            }
            return item;
        }

        let prev = this.head;
        let node = this.head.next;

        while (node) {
            if (node.val === item) {
                this.length--;
                if (node === this.tail) {
                    this.tail = prev;
                    this.tail.next = undefined;
                } else {
                    prev.next = node.next;
                }
                return item;
            }
            prev = node;
            node = node.next;
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        if (!this.head) return undefined;
        if (idx === 0) return this.head.val;
        let nodeIdx = 1;
        let node = this.head.next;
        while (node) {
            if (nodeIdx === idx) {
                return node.val;
            }
            node = node.next;
            nodeIdx++;
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        if (!this.head || idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) {
            this.length--;
            const removedItem = this.head.val;
            if (this.head.next) {
                this.head = this.head.next;
            } else {
                this.head = this.tail = undefined;
            }
            return removedItem;
        }
        let nodeIdx = 1;
        let prev = this.head;
        let node = this.head.next;
        while (node) {
            if (nodeIdx === idx) {
                this.length--;
                const removedItem = node.val;
                if (node === this.tail) {
                    this.tail = prev;
                    this.tail.next = undefined;
                } else {
                    prev.next = node.next;
                }
                return removedItem;
            }
            prev = node;
            node = node.next;
            nodeIdx++;
        }
        return undefined;
    }
}
