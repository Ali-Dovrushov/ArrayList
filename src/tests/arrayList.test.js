const { assert } =  require('chai');
const ArrayList = require('../ArrayList.js');

describe('Arrays Test', () => {
    const aList = new ArrayList();
    describe('myInit', () => {
        
        const testData = [
            {
                array : [1, 2, 3],
                expectedSize : 3,
                expectedToString : '[1, 2, 3]',
            },
            {
                array : [5, 4, 3, 2, 1],
                expectedSize : 5,
                expectedToString : '[5, 4, 3, 2, 1]',
            },
            {
                array : [8, 7, 6, 5, 4, 3, 2, 1],
                expectedSize : 8,
                expectedToString : '[8, 7, 6, 5, 4, 3, 2, 1]',
            },
        ];

        testData.forEach(({ array, expectedSize, expectedToString }) => {
            it(`return should size: ${expectedSize}, string ${expectedToString}`, () => {
                aList.myInit(array);

                const actSize = aList.mySize();
                const actString = aList.myToString();

                assert.deepEqual(actSize, expectedSize);
                assert.strictEqual(actString, expectedToString);
            });
        });
    });
    
    describe('myPop', () => {
        const testData = [
            {
                array : [1, 2, 3],
                expectedSize : 2,
                expectedToString : '[1, 2]',
            },
            {
                array : [5, 4, 3, 2, 1],
                expectedSize : 4,
                expectedToString : '[5, 4, 3, 2]',
            },
            {
                array : [7, 6, 5, 4, 3, 2, 1],
                expectedSize : 6,
                expectedToString : '[7, 6, 5, 4, 3, 2]',
            },
        ];

        testData.forEach(({ array, expectedSize, expectedToString }) => {
            it(`return should size: ${expectedSize}, string ${expectedToString}`, () => {
                aList.myInit(array);
                aList.myPop();

                const actSize = aList.mySize();
                const actString = aList.myToString();

                assert.deepEqual(actSize, expectedSize);
                assert.strictEqual(actString, expectedToString);
            });
        });
    });
    
    describe('myPush', () => {
        const testData = [
            {
                array : [1, 2, 3],
                numberPush : 6,
                expectedSize : 4,
                expectedToString : '[1, 2, 3, 6]',
            },
            {
                array : [5, 4, 3, 2, 1],
                numberPush : 6,
                expectedSize : 6,
                expectedToString : '[5, 4, 3, 2, 1, 6]',
            },
            {
                array : [5, 4, 3, 2, 1, 7, 8],
                numberPush : 6,
                expectedSize : 8,
                expectedToString : '[5, 4, 3, 2, 1, 7, 8, 6]',
            },
        ];

        testData.forEach(({ array, numberPush, expectedSize, expectedToString }) => {
            it(`return should size: ${expectedSize}, string ${expectedToString}`, () => {
                aList.myInit(array);
                aList.myPush(numberPush);

                const actSize = aList.mySize();
                const actString = aList.myToString();

                assert.deepEqual(actSize, expectedSize);
                assert.strictEqual(actString, expectedToString);
            });
        });
    });

    describe('myShift', () => {
        const testData = [
            {
                array : [1, 2, 3, 4, 5],
                expectedSize : 4,
                expectedToString : '[2, 3, 4, 5]',
            },
            {
                array : [5, 4, 3, 2, 1, 213, 234],
                expectedSize : 6,
                expectedToString : '[4, 3, 2, 1, 213, 234]',
            },
            {
                array : [6, 5, 4, 3, 2, 215, 8, 9, 12],
                expectedSize : 8,
                expectedToString : '[5, 4, 3, 2, 215, 8, 9, 12]',
            },
        ];

        testData.forEach(({ array, expectedSize, expectedToString }) => {
            it(`return should size: ${expectedSize}, string ${expectedToString}`, () => {
                aList.myInit(array);
                aList.myShift();

                const actSize = aList.mySize();
                const actString = aList.myToString();

                assert.deepEqual(actSize, expectedSize);
                assert.strictEqual(actString, expectedToString);
            });
        });
    });

    describe('myUnShift', () => {
        const testData = [
            {
                array : [1, 2, 3],
                numberUnShift : 8,
                expectedSize : 4,
                expectedToString : '[8, 1, 2, 3]',
            },
            {
                array : [5, 4, 3, 2, 1],
                numberUnShift : 8,
                expectedSize : 6,
                expectedToString : '[8, 5, 4, 3, 2, 1]',
            },
            {
                array : [5, 4, 3, 2, 1, 22, 23],
                numberUnShift : 8,
                expectedSize : 8,
                expectedToString : '[8, 5, 4, 3, 2, 1, 22, 23]',
            },
        ];

        testData.forEach(({ array, numberUnShift, expectedSize, expectedToString }) => {
            it(`return should size: ${expectedSize}, string ${expectedToString}`, () => {
                aList.myInit(array);
                aList.myUnShift(numberUnShift);

                const actSize = aList.mySize();
                const actString = aList.myToString();

                assert.deepEqual(actSize, expectedSize);
                assert.strictEqual(actString, expectedToString);
            });
        });
    });

    describe('myToString', () => {
        const testData = [
            {
                array : [1, 2, 3, 4, 5],
                expectedSize : 5,
                expectedToString : '[1, 2, 3, 4, 5]',
            },
            {
                array : [10, 4, 3, 2, 1],
                expectedSize : 5,
                expectedToString : '[10, 4, 3, 2, 1]',
            },
            {
                array : [5, 4, 2, 1],
                expectedSize : 4,
                expectedToString : '[5, 4, 2, 1]',
            },
        ];

        testData.forEach(({ array, expectedSize, expectedToString }) => {
            it(`return should string: ${expectedToString}`, () => {
                aList.myInit(array);
                aList.myToString

                const actSize = aList.mySize();
                const actString = aList.myToString();

                assert.deepEqual(actSize, expectedSize);
                assert.strictEqual(actString, expectedToString);
            });
        });
    });

    describe('myClear', () => {
        const testData = [
            {
                array : [1, 2, 3],
                expectedSize : 0,
                expectedToString : '[]',
            },
            {
                array : [5, 4, 3, 2, 1],
                expectedSize : 0,
                expectedToString : '[]',
            },
            {
                array : [5, 4, 3, 2, 1, 6, 8],
                expectedSize : 0,
                expectedToString : '[]',
            },
        ];

        testData.forEach(({ array, expectedSize, expectedToString }) => {
            it(`should clear this [${array}]`, () => {
                aList.myInit(array);
                aList.myClear();

                const actSize = aList.mySize();
                const actString = aList.myToString();

                assert.deepEqual(actSize, expectedSize);
                assert.strictEqual(actString, expectedToString);
            });
        });
    });

    describe('myReverse', () => {
        const testData = [
            {
                array : [1, 2, 3, 4, 5],
                expectedSize : 5,
                expectedArray : [5, 4, 3, 2, 1],
            },
            {
                array : [5, 4, 3, 2, 1, 213, 234],
                expectedSize : 7,
                expectedArray : [234, 213, 1, 2, 3, 4, 5],
            },
            {
                array : [6, 5, 4, 3, 2, 215, 8, 9, 12],
                expectedSize : 9,
                expectedArray : [12, 9, 8, 215, 2, 3, 4, 5, 6],
            },
        ];

        testData.forEach(({ array, expectedArray }) => {
            it(`return should size: ${array}, string ${expectedArray}`, () => {
                aList.myInit(array);
                const actual = aList.myReverse();

                assert.deepEqual(actual, expectedArray);
            });
        });
    });

    describe('mySlice', () => {
        const testData = [
            {
                array : [1, 2, 3, 4, 5],
                numberFrom : 1,
                numberTo : 3,
                expectedSize : 2,
                expectedToString : '[2, 3]',
            },
            {
                array : [5, 4, 3, 2, 1],
                numberFrom : 1,
                numberTo : 3,
                expectedSize : 2,
                expectedToString : '[4, 3]',
            },
            {
                array : [8, 7, 2, 5, 1, 22, 23],
                numberFrom : 1,
                numberTo : 3,
                expectedSize : 2,
                expectedToString : '[7, 2]',
            },
        ];

        testData.forEach(({ array, numberFrom, numberTo, expectedSize, expectedToString }) => {
            it(`return should size: ${expectedSize}, string ${expectedToString}`, () => {
                aList.myInit(array);
                aList.mySlice(numberFrom, numberTo);

                const actSize = aList.mySize();
                const actString = aList.myToString();

                assert.deepEqual(actSize, expectedSize);
                assert.strictEqual(actString, expectedToString);
            });
        });
    });
});