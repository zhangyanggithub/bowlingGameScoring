"use strict";
describe("test score",function () {
    it("case1",function () {
        var output = score("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||");
        expect(output).toEqual(90);
    });
    it("case2",function () {
        var output = score('5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5');
        expect(output).toEqual(150);
    });
    it("case3",function () {
        var output = score('X|X|X|X|X|X|X|X|X|X||XX');
        expect(output).toEqual(300);
    });
    it("case4",function () {
        var output = score('X|7/|9-|X|-8|8/|-6|X|X|X||81');
        expect(output).toEqual(167);
    });
});