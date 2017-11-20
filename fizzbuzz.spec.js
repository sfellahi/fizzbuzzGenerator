import { printIt } from './fizzbuzz.js'

describe('printIt', () => {
    it('should print the integer 1 as string \"1\"', () => {
        expect(printIt(1)).toEqual("1");
    });
    it('should print the integer 2 as string \"2\"', () => {
        expect(printIt(2)).toEqual("2");
    });
    it('should print the integer 3 as string \"Fizz\"', () => {
        expect(printIt(3)).toEqual("Fizz");
    });
    it('should print the integer 6 as string \"Fizz\"', () => {
        expect(printIt(6)).toEqual("Fizz");
    });
});

