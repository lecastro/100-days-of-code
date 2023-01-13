export default class NeedHelpWithYourPacking
{
    private _listWeight: number[];
    private _bags: number;

    constructor(listWeight: number[], bags: number)
    {
        this._listWeight = listWeight;
        this._bags = bags;
    }

    public canFit(): boolean
    {
        let space: number = 0;
        let amountBags: number = 0;

        for (let i = 0; i < this._listWeight.length; i++) {
            space += this._listWeight[i];
        }

        let calc: number = 0;
        let tot: boolean = true;
        
        for (let i = 0; i <= space; i += 10) {
            calc = space - i;
            amountBags++;

            if (amountBags <= this._bags) {
                tot = true;
                continue;
            }

            tot = false;
        }
     
        return tot;
    }   
}