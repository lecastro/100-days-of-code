export default class ConvertYearToDays {
    private _year: number;

    constructor(year: number) {
        this._year = year;
    }

    public run(): number {
        if (this._year === 0) {
            throw new Error("a valid year is needed");
        }

        return this._year * 365
    }
}