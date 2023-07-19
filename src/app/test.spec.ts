import { Calculator } from './testservice';

describe('testService', () => {
    it('should add 2 numbers', () => {
        const sevice  = new Calculator();
        expect(sevice.add(1,2)).toBe(3);
    });
    it ('should subtract 2 numbers', () => {
        const sevice  = new Calculator();
        expect(sevice.subtract(1,2)).toBe(-1);
    });
});
