export default class CalculateDeforested
{
    private _soccerFieldArea: number;
    private _squareMetersPerSquareKilometer: number;
    private deforestedArea: number;
    
    constructor(deforestedArea: number)
    {
        this.deforestedArea = deforestedArea;
        this._soccerFieldArea = 7140;
        this._squareMetersPerSquareKilometer = 1000000;
    }
    
    public calc(): number
    {
        return this.deforestedArea * this._squareMetersPerSquareKilometer / this._soccerFieldArea;
    }
}