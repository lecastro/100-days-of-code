export default class ValidAnagram
{
    private _word1: string;
    private _word2: string;

    constructor(word1: string, word2: string)
    {
        this._word1 = word1;
        this._word2 = word2;
    }

    public check(): boolean
    {
        if (this._word1.length !== this._word2.length) {
            return false;
        }

        let str1 = this._word1.split('').sort().join('');
        let str2 = this._word2.split('').sort().join('');

        return (str1 === str2);
    }
}