export default class FindNemo {
    private _text: string;

    constructor(text: string) {
        this._text = text;
    }

    public SearchNemo(): string {
        const text = this._text.toUpperCase().split(" ");
        const valuePosition = text.indexOf("NEMO") + 1;

        if (valuePosition === -1) {
            return 'not found Nemo';
        }

        return `I found Nemo at ${valuePosition}!`;
    }
}
