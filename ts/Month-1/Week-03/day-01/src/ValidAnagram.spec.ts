import ValidAnagram from "./ValidAnagram";

describe('ValidAnagram unit test', () => {
    it('should validated if anagram word is nagaram word', () => {
        const anagram = new ValidAnagram('anagram', 'nagaram').check();

        expect(anagram).toEqual(true);
    });

    it('should validated if rat word is car word', () => {
        const anagram = new ValidAnagram('rat', 'car').check();

        expect(anagram).toEqual(false);
    });
});