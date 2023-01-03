import BarbecueGrill from "./BarbecueGrill";

describe('BarbecueGrill unit Test', () => {
    it('should enter types of flavors in the grills', () => {
        const flavors = [
            [
                "--oooo-ooo--",
                "--xx--x--xx--",
                "--o---o--oo--",
                "--xx--x--ox--",
                "--xx--x--ox--"
            ],
            [
                "--oooo-ooo--",
                "--xxxxxxxx--",
                "--o---",
                "-o-----o---x--",
                "--o---o-----"
            ]
        ];

        const getTypesFlavors = new BarbecueGrill(flavors).findTypesFlavors();

        expect(getTypesFlavors).toEqual([[2, 3], [3, 2]]);
    });
});