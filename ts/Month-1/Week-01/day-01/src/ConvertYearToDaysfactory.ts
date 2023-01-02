import ConvertYearToDays from "./ConvertYearToDays";

export default class ConvertYearToDaysfactory {
    public static create(year: number): ConvertYearToDays {
        return new ConvertYearToDays(year);
    }
}