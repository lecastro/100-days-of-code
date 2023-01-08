import LetterCombinationsOfAPhoneNumber from "./LetterCombinationsOfAPhoneNumber";

describe('LetterCombinationsOfAPhoneNumber unit test', () => {
    it('should Letter Combinations of a Phone Number', () => {
        const filteredCombinations = new LetterCombinationsOfAPhoneNumber('23').getPossibleCombination();

        expect(filteredCombinations).toEqual(expect.arrayContaining(["ad","ae","af","bd","be","bf","cd","ce","cf"]));
    });

    it('should return array empty where number equal 1', () => {
        const filteredCombinations = new LetterCombinationsOfAPhoneNumber('1').getPossibleCombination();
        
        expect(filteredCombinations).toEqual(expect.arrayContaining([]));
    });
});