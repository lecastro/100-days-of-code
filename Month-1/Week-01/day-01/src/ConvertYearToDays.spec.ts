import ConvertYearToDaysfactory from "./ConvertYearToDaysfactory";

describe("ConvertYearToDays unit Test", () => {
    it("should add year return value in day", () => {
        const convertYearToDays = ConvertYearToDaysfactory.create(30);

        expect(convertYearToDays.run()).toBe(10950);
    });

    it("should throw error where add year value zero", () => {
        expect(() => {
            let convertYearToDays = ConvertYearToDaysfactory.create(0).run();
        }).toThrowError("a valid year is needed");
    });
});