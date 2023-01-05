export default class FindPairsSocks {
    public find(socks: string): number {

        if (socks === '') {
            return 0
        }

        let tranformeSocksInList = socks.split('');
        let count = 0;

        tranformeSocksInList.forEach((value) => {
            if (socks.split(value).length - 1 >= 2) {
                count++;
            }
        });

        return count / 2;
    };
}