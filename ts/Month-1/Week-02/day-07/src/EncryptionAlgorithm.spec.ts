import EncryptionAlgorithm from "./EncryptionAlgorithm";

describe('EncryptionAlgorithm unit test', () => {
    it('should encrypt the word apple', () => {
        const encryptedWord = new EncryptionAlgorithm('apple').encryption();

        expect(encryptedWord).toEqual('1lpp0aca');
    });

    it('should encrypt the word banana', () => {
        const encryptedWord = new EncryptionAlgorithm('banana').encryption();

        expect(encryptedWord).toEqual('0n0n0baca');
    });

    it('should encrypt the word karaca', () => {
        const encryptedWord = new EncryptionAlgorithm('karaca').encryption();

        expect(encryptedWord).toEqual('0c0r0kaca');
    });

    it('should encrypt the word burak', () => {
        const encryptedWord = new EncryptionAlgorithm('burak').encryption();

        expect(encryptedWord).toEqual('k0r4baca');
    });

    it('should encrypt the word alpaca', () => {
        const encryptedWord = new EncryptionAlgorithm('alpaca').encryption();

        expect(encryptedWord).toEqual('0c0pl0aca');
    });
});