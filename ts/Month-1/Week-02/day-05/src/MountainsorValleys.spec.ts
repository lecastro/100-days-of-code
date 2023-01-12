import MountainsorValleys from "./MountainsorValleys";

describe('MountainsorValleys unit test', () => {
    it('should detect Terrain Type, -1, 0, -1', () => {
        let terrain: any[] = [-1, 0, -1];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('montain');
    });

    it('should detect Terrain Type, -1, -1, 0, -1, -1', () => {
        let terrain: any[] = [-1, -1, 0, -1, -1];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('montain');
    });

    it('should detect Terrain Type, 3, 4, 5, 4, 3', () => {
        let terrain: any[] = [3, 4, 5, 4, 3];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('montain');
    });

    it('should detect Terrain Type 1, 3, 5, 4, 3, 2', () => {
        let terrain: any[] = [1, 3, 5, 4, 3, 2];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('montain');
    });

    it('should detect Terrain Type 10, 9, 8, 7, 2, 3, 4, 5', () => {
        let terrain: any[] = [10, 9, 8, 7, 2, 3, 4, 5];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('valley');
    });

    it('should detect Terrain Type 350, 100, 200, 400, 700', () => {
        let terrain: any[] = [350, 100, 200, 400, 700];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('valley');
    });

    it('should detect Terrain Type 9, 7, 3, 1, 2, 4', () => {
        let terrain: any[] = [9, 7, 3, 1, 2, 4];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('valley');
    });

    it('should detect Terrain Type 9, 8, 9', () => {
        let terrain: any[] = [9, 8, 9];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('valley');
    });

    it('should detect Terrain Type 1, 2, 3, 2, 4, 1', () => {
        let terrain: any[] = [1, 2, 3, 2, 4, 1];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('neither');
    });

    it('should detect Terrain Type 5, 4, 3, 2, 1', () => {
        let terrain: any[] = [5, 4, 3, 2, 1];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('neither');
    });

    it('should detect Terrain Type 0, -1, -1, 0, -1, -1', () => {
        let terrain: any[] = [0, -1, -1, 0, -1, -1];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('neither');
    });

    it('should detect Terrain Type 9, 8, 9, 8', () => {
        let terrain: any[] = [9, 8, 9, 8];

        const detectTerrain = new MountainsorValleys(terrain).detectTerrainType();

        expect(detectTerrain).toEqual('neither');
    });
});