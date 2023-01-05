import FindPairsSocks from "./findPairsSocks";

describe('findPairsSocks unit Test', () => {
    it('should find socks', () => {
        const sockPairs1 = new FindPairsSocks().find('AA');
        const sockPairs2 = new FindPairsSocks().find('ABABC');
        const sockPairs3 = new FindPairsSocks().find('CABBACCC');

        expect(sockPairs1).toBe(1);
        expect(sockPairs2).toBe(2);
        expect(sockPairs3).toBe(4);
    });

    it('should return zero where string equal empty', () => {
        const sockPairs = new FindPairsSocks().find('');

        expect(sockPairs).toBe(0);
    });
});