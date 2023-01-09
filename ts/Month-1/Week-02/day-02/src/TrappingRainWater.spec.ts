import TrappingRainWater from "./TrappingRainWater";

describe('TrappingRainWater unit test', () => {
    it('should compute how much water it can trap after raining [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
        const total = new TrappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]).calculate();

        expect(total).toEqual(6);
    });

    it('should compute how much water it can trap after raining [4,2,0,3,2,5]', () => {
        const total = new TrappingRainWater([4,2,0,3,2,5]).calculate();

        expect(total).toEqual(9);
    });
});