const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {

    describe(".announceDawn", () => {
        it("returns a rooster call", () => {
            const expected = 'cock-a-doodle-doo!';
            const result = Rooster.announceDawn();
            assert.strictEqual(result, expected);
        });
    });

    describe(".timeAtDawn", () => {
        it("returns its argument as a string", () => {
            const expected = "8";
            const result = Rooster.timeAtDawn(8);
            assert.strictEqual(result, expected);
        });
        it("throws an error if passed a number less than 0", () => {
            const expected = RangeError;
            const input = -1;
            assert.throws(() => {
                Rooster.timeAtDawn(input);
            }, expected);
        });
        it("throws an error if passed a number greater than 23", () => {
            const expected = RangeError;
            const input = 25;
            assert.throws(() => {
                Rooster.timeAtDawn(input);
            }, expected);
        });
    });
    
});

