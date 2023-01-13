import NeedHelpWithYourPacking from "./NeedHelpWithYourPacking";

describe('NeedHelpWithYourPacking unit test', () => {
    it('should contain all the items 2, 7, 1, 3, 3, 4, 7, 4, 1, 8, 2', () => {
        const canFit = new NeedHelpWithYourPacking([2, 7, 1, 3, 3, 4, 7, 4, 1, 8, 2], 4).canFit();
    
        expect(canFit).toEqual(false);
    });

    it('should contain all the items 2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2 ', () => {
        const canFit = new NeedHelpWithYourPacking([2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2 ], 4).canFit();
    
        expect(canFit).toEqual(true);
    });
});