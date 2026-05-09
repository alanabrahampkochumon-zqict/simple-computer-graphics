import {describe, expect, test} from "vitest";
import {Mat3} from "../src/matrices/Mat3";

describe("Mat3: Instantiation", () => {

    test("returns 3D matrix initialized with parameters in column major order", () => {
        const mat = new Mat3(1, 2, 3, 4, 5, 6, 7, 8, 9)

        expect(mat.buffer[0]).toBe(1)
        expect(mat.buffer[1]).toBe(4)
        expect(mat.buffer[2]).toBe(7)
        expect(mat.buffer[3]).toBe(2)
        expect(mat.buffer[4]).toBe(5)
        expect(mat.buffer[5]).toBe(8)
        expect(mat.buffer[6]).toBe(3)
        expect(mat.buffer[7]).toBe(6)
        expect(mat.buffer[8]).toBe(9)
    })
})