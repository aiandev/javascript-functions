const circleArea = require("../pure");
let { counter, initValue } = require("../impure");

describe('Pure function requirements', () => {
    it('It was always returned the same result if given the same arguments.', () => {
       expect(circleArea(2)).toBe(12.56);
       expect(circleArea(2)).toBe(12.56);
    });

    it('No side effects occur during the execution of the function', () => {
        expect(circleArea(2)).toBe(12.56);
     });
})

describe('Impure function requirements', () => {
    it('It returned "some time" the diff result if given the same arguments.', () => {
       expect(counter(2)).toBe(2);
       expect(counter(2)).toBe(4);
    });
    initValue = 4
    it('Side effects occur during the execution of the function', () => {
        expect(counter(2)).toBe(6);
        initValue = 5
        expect(counter(2)).toBe(8);

     });
})