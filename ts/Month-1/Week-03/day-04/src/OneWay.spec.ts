import OneWay from "./OneWay";

describe('OneWay unit test', () => {
    it('must calculate unique paths rows 3 and _columns 7', () => {
        const uniquePaths = new OneWay(3, 7).uniquePaths();

        expect(uniquePaths).toEqual(28);
    });

    it('must calculate unique paths rows 3 and _columns 2', () => {
        const uniquePaths = new OneWay(3, 2).uniquePaths();

        expect(uniquePaths).toEqual(3);
    });

    it('must calculate unique paths rows 3 and _columns 3', () => {
        const uniquePaths = new OneWay(3, 3).uniquePaths();

        expect(uniquePaths).toEqual(6);
    });
});