import CalculateDeforested from "./CalculateDeforested";

describe('CalculateDeforested unit test', () => {
    it('should calculete area', () => {
        let soccerFields = new CalculateDeforested(1.034).calc();

        expect(soccerFields).toBe(144.81792717086836);
    });
});