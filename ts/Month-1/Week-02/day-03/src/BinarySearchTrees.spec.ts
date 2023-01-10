import BinarySearchTrees from "./BinarySearchTrees";

describe('BinarySearchTrees1 unit test', () => {
    it('should structurally unique BSTS', () => {
        const total = new BinarySearchTrees(3).numberOfBST();

        expect(total).toEqual(5);
    });
});