export default class NextNumberPrime {
    private _num: number;

    constructor(num: number) {
        this._num = num;
    }

    public findTheNearestPrimeNumber(): number {
        if (this._num === 0) {
            return 0;
        }

        const numberPrime = this.isPrime(this._num);

        if (numberPrime !== 0) {
            return numberPrime;
        }

        if (this.getTheNearestPrimeNumber(this._num)) {
            return this.getTheNearestPrimeNumber(this._num);
        }

        return 0;
    };

    private isPrime(number: number): number {
        for (let index = 2; index < number; index++) {
            if (number % index === 0) {
                return 0
            }
        }

        return number;
    }

    private getTheNearestPrimeNumber(number: number): number {
        for (let index = number; index <= Infinity; index++) {
            let numberPrime = this.isPrime(index);
            if (numberPrime !== 0) {
                return numberPrime;
            }
        }

        return 0;
    }
}