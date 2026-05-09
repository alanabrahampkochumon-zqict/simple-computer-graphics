import { describe, expect, test } from "vitest";
import {Vector3D} from "../src/vectors/Vector3D";

describe("Vector3D: Instantiation", () => {
    test("returns Vector3D initialized with parameters", () => {
        const vec = new Vector3D(1, 2, 3);

        expect(vec.x()).toStrictEqual(1)
        expect(vec.y()).toStrictEqual(2)
        expect(vec.z()).toStrictEqual(3)
    })
})


describe("Vector3D: Getters", () => {
    const vec = new Vector3D(1, 2, 3);

    test("returns the first component, when x() is invoked on the vector", () => {
        expect(vec.x()).toStrictEqual(1);
    })

    test("returns the second component, when y() is invoked on the vector", () => {
        expect(vec.y()).toStrictEqual(2);
    })

    test("returns the third component, when z() is invoked on the vector", () => {
        expect(vec.z()).toStrictEqual(3);
    })
})


describe("Vector3D: Setters", () => {
    const vec = new Vector3D(0, 0,0)

    test("mutates the first component, when setX is called with a value", () => {
        vec.setX(3)

        expect(vec.x()).toStrictEqual(3)
    })

    test("mutates the first component, when setY is called with a value", () => {
        vec.setY(1)

        expect(vec.y()).toStrictEqual(1)
    })

    test("mutates the first component, when setZ is called with a value", () => {
        vec.setZ(6)

        expect(vec.z()).toStrictEqual(6)
    })


    test("returns vector with mutated value, when setX is called with a value", () => {
        const returnedVector = vec.setX(1)
        expect(returnedVector.x()).toStrictEqual(1)
    })

    test("returns vector with mutated value, when setY is called with a value", () => {
        const returnedVector =vec.setY(2)
        expect(returnedVector.y()).toStrictEqual(2)
    })

    test("returns vector with mutated value, when setZ is called with a value", () => {
        const returnedVector =vec.setZ(7)
        expect(returnedVector.z()).toStrictEqual(7)
    })

    test("returned vector is this vector, when setX is called with a value", () => {
        const returnedVector = vec.setX(1)
        expect(returnedVector).toBe(vec)
    })

    test("returned vector is this vector, when setY is called with a value", () => {
        const returnedVector =vec.setY(2)
        expect(returnedVector).toBe(vec)
    })

    test("returned vector is this vector, when setZ is called with a value", () => {
        const returnedVector =vec.setZ(7)
        expect(returnedVector).toBe(vec)
    })

})