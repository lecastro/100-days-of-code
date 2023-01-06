import NextNumberPrime from "./NextNumberPrime";

describe('NextNumberPrime unit Test', () => {
    it('should find the nearest prime number value 12', () => {
        const numberPrime = new NextNumberPrime(12).findTheNearestPrimeNumber();

        expect(numberPrime).toBe(13);
    });

    it('should find the nearest prime number value 24', () => {
        const numberPrime = new NextNumberPrime(24).findTheNearestPrimeNumber();

        expect(numberPrime).toBe(29);
    });

    it('should find the nearest prime number value 13', () => {
        const numberPrime = new NextNumberPrime(13).findTheNearestPrimeNumber();

        expect(numberPrime).toBe(13);
    });

    it('should find the nearest prime number value 0', () => {
        const numberPrime = new NextNumberPrime(0).findTheNearestPrimeNumber();

        expect(numberPrime).toBe(0);
    });
});