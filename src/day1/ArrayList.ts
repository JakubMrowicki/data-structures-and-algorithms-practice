export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    private array: Array<T>;

    constructor(capacity: number) {
        this.array = new Array<T>(capacity);
        this.capacity = capacity;
        this.length = 0;
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }

        if (this.length >= this.capacity) {
            this.resize();
        }

        for (let i = this.length; i > idx; i--) {
            this.array[i] = this.array[i - 1];
        }

        this.array[idx] = item;
        this.length++;
    }

    append(item: T): void {
        if (this.length >= this.capacity) {
            this.resize();
        }

        this.array[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        const index = this.array.indexOf(item);

        if (index !== -1) {
            return this.removeAt(index);
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        return this.array[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Index out of bounds");
        }

        const removedItem = this.array[idx];

        for (let i = idx; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }

        this.length--;

        return removedItem;
    }

    private resize(): void {
        this.capacity += 5;
        const newArray = new Array<T>(this.capacity);

        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i];
        }

        this.array = newArray;
    }
}
