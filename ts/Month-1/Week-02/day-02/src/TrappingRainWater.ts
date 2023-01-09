export default class TrappingRainWater {
    private _inputHeight: number[];

    constructor(inputHeight: number[])
    {
        this._inputHeight = inputHeight;
    }

    public calculate(): number
    {
        let accumulator = 0;

        for (let index = 0; index < this._inputHeight.length; index++) {
            let maxLeft = 0;

            for (let j = index; j >= 0; j--) {
                if (this._inputHeight[j] > this._inputHeight[maxLeft]) {
                    maxLeft = j;
                }
            }

            let maxRight = 0;

            for (let j = index; j < this._inputHeight.length; j++) {
                if (this._inputHeight[j] > this._inputHeight[maxRight]) {
                    maxRight = j;
                }
            }

            const heightMax = Math.min(this._inputHeight[maxLeft], this._inputHeight[maxRight]);

            if (heightMax > this._inputHeight[index]) {
                accumulator += heightMax - this._inputHeight[index];
            }
        }

        return accumulator;
    }
}