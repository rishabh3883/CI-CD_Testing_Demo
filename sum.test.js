import sum from "./sum.js";
describe("sum function", () =>{
    test("adds 2 + 2 to equal 4", () => {
    expect(sum(-2, 2)).toBe(0);
    });

    test("add  -4 + 5 t equal 1", () =>{
        expect(sum(-4, 5)).toBe(1);
    });
});
