export default class ProgressDay {
    private _days: number[];

    constructor(days: number[]) {
        this._days = days;
    }

    public days(): number {
        let result =
            this._days.filter((item: number, index: number, arr: number[]) => {
                if (item < arr[index + 1]) {
                    return item;
                }
            });

        return result.length;
    }
}