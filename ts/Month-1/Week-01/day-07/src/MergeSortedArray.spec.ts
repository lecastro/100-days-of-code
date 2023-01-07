import MergeSortedArray from "./MergeSortedArray";
describe('MergeSortedArray unit test', () => {
    it('should meger sort array', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [2, 5, 6];

        const output = new MergeSortedArray(nums1, nums2).run();

        expect(output).toEqual(expect.arrayContaining([ 1, 2, 2, 3, 5, 6 ]));
    });
});