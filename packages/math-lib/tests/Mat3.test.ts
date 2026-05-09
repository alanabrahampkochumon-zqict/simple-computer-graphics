import {describe, expect, test} from "vitest";
import {Mat3} from "../src/matrices/Mat3";

describe("Mat3: Instantiation", () => {

    test("returns 3D matrix initialized with parameters in column major order", () => {
        const mat = new Mat3(1, 2, 3, 4, 5, 6, 7, 8, 9)

        expect(mat.buffer[0]).toStrictEqual(1)
        expect(mat.buffer[1]).toStrictEqual(4)
        expect(mat.buffer[2]).toStrictEqual(7)
        expect(mat.buffer[3]).toStrictEqual(2)
        expect(mat.buffer[4]).toStrictEqual(5)
        expect(mat.buffer[5]).toStrictEqual(8)
        expect(mat.buffer[6]).toStrictEqual(3)
        expect(mat.buffer[7]).toStrictEqual(6)
        expect(mat.buffer[8]).toStrictEqual(9)
    })
})

describe("Mat3: Index based accessor", () => {
    const mat = new Mat3(1, 2, 3, 4, 5, 6, 7, 8, 9)

    test("returns values in a row major order, when accessed using row, col", () => {
        expect(mat.get(0, 0)).toStrictEqual(1)
        expect(mat.get(0, 1)).toStrictEqual(2)
        expect(mat.get(0, 2)).toStrictEqual(3)
        expect(mat.get(1, 0)).toStrictEqual(4)
        expect(mat.get(1, 1)).toStrictEqual(5)
        expect(mat.get(1, 2)).toStrictEqual(6)
        expect(mat.get(2, 0)).toStrictEqual(7)
        expect(mat.get(2, 1)).toStrictEqual(8)
        expect(mat.get(2, 2)).toStrictEqual(9)
    })
})


describe("Mat3: Index based mutator", () => {
    const mat = new Mat3(0, 0, 0, 0, 0, 0, 0, 0, 0)

    test("mutates values in a row major order, when value is set using row, col", () => {
        mat.set(0, 0, 1)
        mat.set(0, 1, 2)
        mat.set(0, 2, 3)
        mat.set(1, 0, 4)
        mat.set(1, 1, 5)
        mat.set(1, 2, 6)
        mat.set(2, 0, 7)
        mat.set(2, 1, 8)
        mat.set(2, 2, 9)

        expect(mat.get(0, 0)).toStrictEqual(1)
        expect(mat.get(0, 1)).toStrictEqual(2)
        expect(mat.get(0, 2)).toStrictEqual(3)
        expect(mat.get(1, 0)).toStrictEqual(4)
        expect(mat.get(1, 1)).toStrictEqual(5)
        expect(mat.get(1, 2)).toStrictEqual(6)
        expect(mat.get(2, 0)).toStrictEqual(7)
        expect(mat.get(2, 1)).toStrictEqual(8)
        expect(mat.get(2, 2)).toStrictEqual(9)
    })
})