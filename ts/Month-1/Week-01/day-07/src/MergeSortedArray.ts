export default class MergeSortedArray {
    private _numbers1: number[];
    private _numbers2: number[];

    constructor(number1: number[], number2: number[]) {
        this._numbers1 = number1;
        this._numbers2 = number2;
    }

    public run(): number[] {
        return [...this._numbers1, ...this._numbers2].filter(item => { return item > 0 }).sort();
    }
}