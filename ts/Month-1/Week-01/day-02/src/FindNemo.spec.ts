import FindNemo from "./FindNemo";

describe("findNemo unit Test", () => {
    it("should receive a phrase is to look for the word nemo", () => {
        const findNemo = new FindNemo('I am finding Nemo !').SearchNemo();

        expect(findNemo).toBe('I found Nemo at 4!');
    });

    it("should throw error When not find work nemo", () => {
        const findNemo = new FindNemo('I am finding').SearchNemo();

        expect(findNemo).toBe('I found Nemo at 0!');
    });
});