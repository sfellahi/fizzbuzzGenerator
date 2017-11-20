import { printIt } from './fizzbuzz.js'

describe('printIt', () => {
    it('should print the integer 1 as string \"1\"', () => {
        expect(printIt(1)).toEqual("1");
    });
    it('should print the integer 2 as string \"2\"', () => {
        expect(printIt(2)).toEqual("2");
    });
});

