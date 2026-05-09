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


describe("Mat3: Add", () => {

    const matA = new Mat3(1, 2, 3, 4, 5, 6, 7, 8, 9)
    const matB = new Mat3(7, 8, 9, 10, 11, 12, 13, 14, 15)

    test("modifies out matrix with the result, when two matrices are added together", () => {
        const matC = new Mat3()

        Mat3.add(matC, matA, matB)

        expect(matC.get(0, 0)).toStrictEqual(8)
        expect(matC.get(0, 1)).toStrictEqual(10)
        expect(matC.get(0, 2)).toStrictEqual(12)
        expect(matC.get(1, 0)).toStrictEqual(14)
        expect(matC.get(1, 1)).toStrictEqual(16)
        expect(matC.get(1, 2)).toStrictEqual(18)
        expect(matC.get(2, 0)).toStrictEqual(20)
        expect(matC.get(2, 1)).toStrictEqual(22)
        expect(matC.get(2, 2)).toStrictEqual(24)
    })

    test("do not modify the original matrix, when two matrices are added together", () => {
        const matC = new Mat3()

        Mat3.add(matC, matA, matB)

        expect(matA.get(0, 0)).toStrictEqual(1)
        expect(matA.get(0, 1)).toStrictEqual(2)
        expect(matA.get(0, 2)).toStrictEqual(3)
        expect(matA.get(1, 0)).toStrictEqual(4)
        expect(matA.get(1, 1)).toStrictEqual(5)
        expect(matA.get(1, 2)).toStrictEqual(6)
        expect(matA.get(2, 0)).toStrictEqual(7)
        expect(matA.get(2, 1)).toStrictEqual(8)
        expect(matA.get(2, 2)).toStrictEqual(9)

        expect(matB.get(0, 0)).toStrictEqual(7)
        expect(matB.get(0, 1)).toStrictEqual(8)
        expect(matB.get(0, 2)).toStrictEqual(9)
        expect(matB.get(1, 0)).toStrictEqual(10)
        expect(matB.get(1, 1)).toStrictEqual(11)
        expect(matB.get(1, 2)).toStrictEqual(12)
        expect(matB.get(2, 0)).toStrictEqual(13)
        expect(matB.get(2, 1)).toStrictEqual(14)
        expect(matB.get(2, 2)).toStrictEqual(15)
    })

    test("returns the out matrix, when two matrices are added together", () => {
        const matC = new Mat3()

        const returnedMat = Mat3.add(matC, matA, matB)

        expect(returnedMat).toBe(matC)
    })
})

describe("Mat3: Subtract", () => {

    const matA = new Mat3(12, 22, 31, 43, 51, 65, 71, 81, 92)
    const matB = new Mat3(7, 8, 9, 10, 11, 12, 13, 14, 15)

    test("modifies out matrix with the result, when two matrices are subtracted", () => {
        const matC = new Mat3()

        Mat3.subtract(matC, matA, matB)

        expect(matC.get(0, 0)).toStrictEqual(5)
        expect(matC.get(0, 1)).toStrictEqual(14)
        expect(matC.get(0, 2)).toStrictEqual(22)
        expect(matC.get(1, 0)).toStrictEqual(33)
        expect(matC.get(1, 1)).toStrictEqual(40)
        expect(matC.get(1, 2)).toStrictEqual(53)
        expect(matC.get(2, 0)).toStrictEqual(58)
        expect(matC.get(2, 1)).toStrictEqual(67)
        expect(matC.get(2, 2)).toStrictEqual(77)
    })

    test("do not modify the original matrix, when two matrices are subtracted", () => {
        const matC = new Mat3()

        Mat3.subtract(matC, matA, matB)

        expect(matA.get(0, 0)).toStrictEqual(12)
        expect(matA.get(0, 1)).toStrictEqual(22)
        expect(matA.get(0, 2)).toStrictEqual(31)
        expect(matA.get(1, 0)).toStrictEqual(43)
        expect(matA.get(1, 1)).toStrictEqual(51)
        expect(matA.get(1, 2)).toStrictEqual(65)
        expect(matA.get(2, 0)).toStrictEqual(71)
        expect(matA.get(2, 1)).toStrictEqual(81)
        expect(matA.get(2, 2)).toStrictEqual(92)

        expect(matB.get(0, 0)).toStrictEqual(7)
        expect(matB.get(0, 1)).toStrictEqual(8)
        expect(matB.get(0, 2)).toStrictEqual(9)
        expect(matB.get(1, 0)).toStrictEqual(10)
        expect(matB.get(1, 1)).toStrictEqual(11)
        expect(matB.get(1, 2)).toStrictEqual(12)
        expect(matB.get(2, 0)).toStrictEqual(13)
        expect(matB.get(2, 1)).toStrictEqual(14)
        expect(matB.get(2, 2)).toStrictEqual(15)
    })

    test("returns the out matrix, when two matrices are subtracted", () => {
        const matC = new Mat3()

        const returnedMat = Mat3.subtract(matC, matA, matB)

        expect(returnedMat).toBe(matC)
    })
})


describe("Mat3: Multiply", () => {

    const matA = new Mat3(12, 22, 31, 43, 51, 65, 71, 81, 92)
    const scalar = 2

    test("modifies out matrix with the result, when matrix is multiplied with a scalar", () => {
        const matC = new Mat3()

        Mat3.multiplyScalar(matC, matA, scalar)

        expect(matC.get(0, 0)).toStrictEqual(24)
        expect(matC.get(0, 1)).toStrictEqual(44)
        expect(matC.get(0, 2)).toStrictEqual(62)
        expect(matC.get(1, 0)).toStrictEqual(86)
        expect(matC.get(1, 1)).toStrictEqual(102)
        expect(matC.get(1, 2)).toStrictEqual(130)
        expect(matC.get(2, 0)).toStrictEqual(142)
        expect(matC.get(2, 1)).toStrictEqual(162)
        expect(matC.get(2, 2)).toStrictEqual(184)
    })

    test("do not modify the original matrix, when matrix is multiplied with a scalar", () => {
        const matC = new Mat3()

        Mat3.multiplyScalar(matC, matA, scalar)

        expect(matA.get(0, 0)).toStrictEqual(12)
        expect(matA.get(0, 1)).toStrictEqual(22)
        expect(matA.get(0, 2)).toStrictEqual(31)
        expect(matA.get(1, 0)).toStrictEqual(43)
        expect(matA.get(1, 1)).toStrictEqual(51)
        expect(matA.get(1, 2)).toStrictEqual(65)
        expect(matA.get(2, 0)).toStrictEqual(71)
        expect(matA.get(2, 1)).toStrictEqual(81)
        expect(matA.get(2, 2)).toStrictEqual(92)
    })

    test("returns the out matrix, when matrix is multiplied with a scalar", () => {
        const matC = new Mat3()

        const returnedMat = Mat3.multiplyScalar(matC, matA, scalar)

        expect(returnedMat).toBe(matC)
    })
})


describe("Mat3: Multiply", () => {

    const matA = new Mat3(1, 2, 3, 4, 5, 6, 7, 8, 9)
    const matB = new Mat3(10, 11, 12, 13, 14, 15, 16, 17, 18)

    test("modifies out matrix with the result, when matrix is multiplied with a scalar", () => {
        const matC = new Mat3()

        Mat3.multiply(matC, matA, matB)

        expect(matC.get(0, 0)).toStrictEqual(84)
        expect(matC.get(0, 1)).toStrictEqual(90)
        expect(matC.get(0, 2)).toStrictEqual(96)
        expect(matC.get(1, 0)).toStrictEqual(201)
        expect(matC.get(1, 1)).toStrictEqual(216)
        expect(matC.get(1, 2)).toStrictEqual(231)
        expect(matC.get(2, 0)).toStrictEqual(318)
        expect(matC.get(2, 1)).toStrictEqual(342)
        expect(matC.get(2, 2)).toStrictEqual(366)
    })

    test("matrix product is not commutative", () => {
        const matC = new Mat3()

        Mat3.multiply(matC, matB, matA)

        expect(matC.get(0, 0)).toStrictEqual(138)
        expect(matC.get(0, 1)).toStrictEqual(171)
        expect(matC.get(0, 2)).toStrictEqual(204)
        expect(matC.get(1, 0)).toStrictEqual(174)
        expect(matC.get(1, 1)).toStrictEqual(216)
        expect(matC.get(1, 2)).toStrictEqual(258)
        expect(matC.get(2, 0)).toStrictEqual(210)
        expect(matC.get(2, 1)).toStrictEqual(261)
        expect(matC.get(2, 2)).toStrictEqual(312)
    })

    test("do not modify the original matrix, when matrix is multiplied with a scalar", () => {
        const matC = new Mat3()

        Mat3.multiply(matC, matA, matB)

        expect(matA.get(0, 0)).toStrictEqual(1)
        expect(matA.get(0, 1)).toStrictEqual(2)
        expect(matA.get(0, 2)).toStrictEqual(3)
        expect(matA.get(1, 0)).toStrictEqual(4)
        expect(matA.get(1, 1)).toStrictEqual(5)
        expect(matA.get(1, 2)).toStrictEqual(6)
        expect(matA.get(2, 0)).toStrictEqual(7)
        expect(matA.get(2, 1)).toStrictEqual(8)
        expect(matA.get(2, 2)).toStrictEqual(9)

        expect(matB.get(0, 0)).toStrictEqual(10)
        expect(matB.get(0, 1)).toStrictEqual(11)
        expect(matB.get(0, 2)).toStrictEqual(12)
        expect(matB.get(1, 0)).toStrictEqual(13)
        expect(matB.get(1, 1)).toStrictEqual(14)
        expect(matB.get(1, 2)).toStrictEqual(15)
        expect(matB.get(2, 0)).toStrictEqual(16)
        expect(matB.get(2, 1)).toStrictEqual(17)
        expect(matB.get(2, 2)).toStrictEqual(18)
    })

    test("returns the out matrix, when matrix is multiplied with a scalar", () => {
        const matC = new Mat3()

        const returnedMat = Mat3.multiply(matC, matA, matB)

        expect(returnedMat).toBe(matC)
    })
})