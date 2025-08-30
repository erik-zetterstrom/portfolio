
export function getPixels(percentage: number): number {
    if (percentage < 0 || 100 < percentage) {
        throw new Error("percentage must be in range [0, 100], not " + percentage.toString());
        
    }

    let fraction = percentage/100;

    return Math.min(fraction*window.innerHeight, fraction*window.innerWidth);
}