import ProgressDay from "./ProgressDay";

describe("ProgressDay unit Test", () => {
    it('should total number of progress days', () => {
        const progressDays = [3, 4, 1, 2];

        const totProgressDay = new ProgressDay(progressDays).days();

        expect(totProgressDay).toBe(2);
    });
});