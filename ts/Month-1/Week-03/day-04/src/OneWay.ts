export default class OneWay
{
    private _rows: number;
    private _columns: number;

    constructor(rows: number, columns: number)
    {
        this._rows      = rows;
        this._columns   = columns;
    }

    public uniquePaths() {
        // cria uma matriz com valores iniciais de 1
        let dp = Array(this._rows).fill(null).map(() => Array(this._columns).fill(1));
     
        // preenche a matriz com a quantidade de caminhos únicos
        for (let i = 1; i < this._rows; i++) {
          for (let j = 1; j < this._columns; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
          }
        }
        
        // retorna o número de caminhos únicos
        return dp[this._rows - 1][this._columns - 1];
      }     
}