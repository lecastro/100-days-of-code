export default class BarbecueGrill {
    private _flavors: string[][];

    constructor(flavors: string[][]) {
        this._flavors = flavors;
    }

    public findTypesFlavors(): number[] {
        let listFlavors = this._flavors;
        let data: any[] = [];
        let vegetarianSkewers: number = 0;
        let nonVegetarianSkewers: number = 0;

        listFlavors.forEach((item: string[]): void => {
            vegetarianSkewers = 0;
            nonVegetarianSkewers = 0;

            item.forEach((value: string) => {
                if (!value.match(/x/)) {
                    vegetarianSkewers++;
                    return;
                }
                nonVegetarianSkewers++;
            });

            data.push([vegetarianSkewers, nonVegetarianSkewers]);
        });

        return data;
    }
}