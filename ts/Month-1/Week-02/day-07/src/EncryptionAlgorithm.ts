export default class EncryptionAlgorithm
{
    private _value: string;
    private _baseList: string[];

    constructor(value :string)
    {
        this._value = value;
        this._baseList = [
            'a',
            'e',
            'i',
            'o',
            'u'
        ];
    }

    public encryption(): string
    {
        const reverseWord = this.reverseWord();

        let encryptedWord = this.pluckVogais(reverseWord);
        
        return `${this.convertWordInstring(encryptedWord)}aca`;
    };

    private reverseWord(): string
    {
        const word: string[] = this._value.split('');

        let reverseWord: string = '';

        for (let i = word.length - 1; i >= 0; i--) {
            reverseWord += word[i];
        }
        
        return reverseWord;
    }

    private pluckVogais(word: any): string
    {
        let value = word.split('');

        return value.map((value: string): string|number => {
            if (this._baseList.indexOf(value) !== -1) {
                return this._baseList.indexOf(value);
            }

            return value;
        });
    }

    private convertWordInstring(word: string|number[]): string
    {
        let str: string = '';

        for (let i = 0; i < word.length; i++) {
            str += word[i];
        }

        return str;
    }
}