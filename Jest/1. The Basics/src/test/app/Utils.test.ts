import { getStringInfo, toUpperCase } from "../../app/Utils";

describe('Utils test suite', () => {

    it('should return uppercase of valid string', () => {
        //arrange
        const sut = toUpperCase;
        const expected = 'ABC';

        //action
        const actual = sut('abc');

        //assert
        expect(actual).toBe(expected);
    });

    describe('getStringInfo for arg Word should', () => {

        test('return right length', () => {
            const actual = getStringInfo('Word');
            expect(actual.characters).toHaveLength(4);
        });

        test('return right lower case', () => {
            const actual = getStringInfo('Word');
            expect(actual.lowerCase).toBe('word');
        });

        test('return right upper case', () => {
            const actual = getStringInfo('Word');
            expect(actual.upperCase).toBe('WORD');
        });

        test('return right characters', () => {
            const actual = getStringInfo('Word');
            expect(actual.characters).toEqual(['W', 'o', 'r', 'd']);
            expect(actual.characters).toContain<string>('W');
            expect(actual.characters).toEqual(
                expect.arrayContaining(['d', 'r', 'o', 'W'])
            );
        });

        test('return defined extra info', () => {
            const actual = getStringInfo('Word');
            expect(actual.extraInfo).toBeDefined();
        });

        test('return right extra info', () => {
            const actual = getStringInfo('Word');
            expect(actual.extraInfo).toEqual({});
        });
    });

    describe.only('ToUpperCase examples', () => {
        it.each([
            { input: 'abc', expected: "ABC" },
            { input: 'Digimon', expected: 'DIGIMON' },
            { input: 'pokemon', expected: 'POKEMON' }])('$input to UpperCase should be $expected', ({ input, expected }) => {
                const actual = toUpperCase(input);
                expect(actual).toBe(expected);
            });
    });


});


