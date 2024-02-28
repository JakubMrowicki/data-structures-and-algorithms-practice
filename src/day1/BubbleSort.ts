export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

// O(N^2)
/*
How it works:
[1,4,3,2]
[1,3,4,2]
[1,3,2,4]
[1,2,3,4]
*/
