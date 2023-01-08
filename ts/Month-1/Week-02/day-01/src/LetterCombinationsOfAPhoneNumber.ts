export default class LetterCombinationsOfAPhoneNumber {
    private _input: string;

    constructor(input: string){
        this._input = input;
    }

    public getPossibleCombination(): string[]
    {
        const inputs = this.parseStringforInt();

        const combinations = this.pluckCombinations(inputs);

        let elements:string[] = [];

        combinations.forEach((combination:string[], index:number, getCombinations: string[][]) =>{
            let nextElement:string[] = getCombinations[index+1];
            
            combination.forEach((letter: string) => {
                if (nextElement !== undefined) {
                    nextElement.forEach((letterValue: string) => {
                        elements.push(`${letter}${letterValue}`);
                    });
                }
            });
        });

        return this.filterCombinations(elements);
    }

    private parseStringforInt(): number[]
    {
        return this._input.split('').map(element => {return parseInt(element)});
    }

    private pluckCombinations(inputs: number[]): string[][]
    {
        const pluckCombinations:string[][] = [];

        for (let index = 1; index < this.possibleCombination().length; index++) {
            let ordem = index + 1;
            if (inputs.indexOf(ordem) !== -1) {
                pluckCombinations.push(this.possibleCombination()[index]);
            }
        }

        return pluckCombinations;
    }
    
    private filterCombinations(combinations:string[]): string[]
    {
        return combinations.map((value) => {return value});
    }

    private possibleCombination(): string[][] {
        return [
            [""],
            ["a","b","c"],
            ["d","e","f"],
            ["g","h","i"],
            ["j","k","l"],
            ["m","n","o"],
            ["p","q","r", "s"],
            ["t","u","v"],
            ["w","x","y","z"],
        ];
    }
}