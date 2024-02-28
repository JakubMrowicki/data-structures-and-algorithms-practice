export default function two_crystal_balls(breaks: boolean[]): number {
    // Determine hop distance
    const jumpAmt = Math.floor(Math.sqrt(breaks.length));

    // Hop until a ball breaks
    let breaksAt = jumpAmt;
    for (; breaksAt < breaks.length; breaksAt += jumpAmt) {
        if (breaks[breaksAt]) break;
    }

    // Walk back one jump.
    breaksAt -= jumpAmt;

    // Test for true value until ball breaks again.
    for (let i = breaksAt; i < breaks.length; ++i) {
        if (breaks[i]) return i;
    }

    // Otherwise return -1
    return -1;
}
