function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        //console.log(`${lo} >= ${hi}`);
        return;
    }
    const pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }

    idx++;
    [arr[hi], arr[idx]] = [arr[idx], arr[hi]];
    return idx;
}

export default function quick_sort(arr: number[]): void {
    console.log(`Sorting ${arr} \nLow: ${0}\nHigh: ${arr.length - 1}`);
    qs(arr, 0, arr.length - 1);
}
