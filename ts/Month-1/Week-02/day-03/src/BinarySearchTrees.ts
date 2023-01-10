export default class BinarySearchTrees
{
    private _input: number;

    constructor(input: number)
    {
        this._input = input;
    }

    public numberOfBST(): number
    {
        let dp = new Array(this._input + 1).fill(0);

        dp[0] = 1, dp[1] = 1

        for(let i=2;i< this._input + 1; i++){
            for(let j=1;j<i + 1;j++){
                dp[i] = dp[i] + (dp[i - j] * dp[j - 1]);
            }
        }

        return dp[this._input];
    }
}