import {describe, expect, test} from "vitest";
import {Vec3} from "../src/vectors/Vec3";

describe("Vector3D: Instantiation", () => {
    test("returns Vector3D initialized with parameters", () => {
        const vec = new Vec3(1, 2, 3);

        expect(vec.x()).toStrictEqual(1)
        expect(vec.y()).toStrictEqual(2)
        expect(vec.z()).toStrictEqual(3)
    })

    test("returns zero Vector3D, when initialized without parameters", () => {
        const vec = new Vec3();

        expect(vec.x()).toStrictEqual(0)
        expect(vec.y()).toStrictEqual(0)
        expect(vec.z()).toStrictEqual(0)
    })
})


describe("Vector3D: Getters", () => {
    const vec = new Vec3(1, 2, 3);

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
    const vec = new Vec3(0, 0, 0)

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
        const returnedVector = vec.setY(2)
        expect(returnedVector.y()).toStrictEqual(2)
    })

    test("returns vector with mutated value, when setZ is called with a value", () => {
        const returnedVector = vec.setZ(7)
        expect(returnedVector.z()).toStrictEqual(7)
    })

    test("returned vector is this vector, when setX is called with a value", () => {
        const returnedVector = vec.setX(1)
        expect(returnedVector).toBe(vec)
    })

    test("returned vector is this vector, when setY is called with a value", () => {
        const returnedVector = vec.setY(2)
        expect(returnedVector).toBe(vec)
    })

    test("returned vector is this vector, when setZ is called with a value", () => {
        const returnedVector = vec.setZ(7)
        expect(returnedVector).toBe(vec)
    })

})


describe("Vector3D: Addition", () => {

    const vec1 = new Vec3(1, 2, 3)
    const vec2 = new Vec3(4, 5, 6)

    test("modifies out vector with the result, when two vectors are added together", () => {
        const result = new Vec3()
        Vec3.add(result, vec1, vec2)
        expect(result.x()).toStrictEqual(5)
        expect(result.y()).toStrictEqual(7)
        expect(result.z()).toStrictEqual(9)
    })


    test("does not mutate either vectors, when two vectors are added together", () => {
        const result = new Vec3()
        Vec3.add(result, vec1, vec2)

        expect(vec1.x()).toStrictEqual(1)
        expect(vec1.y()).toStrictEqual(2)
        expect(vec1.z()).toStrictEqual(3)

        expect(vec2.x()).toStrictEqual(4)
        expect(vec2.y()).toStrictEqual(5)
        expect(vec2.z()).toStrictEqual(6)
    })


    test("returns the out vector, when two vectors are added together", () => {
        const out = new Vec3()
        const result = Vec3.add(out, vec1, vec2)

        expect(result).toBe(out)
    })
})


describe("Vector3D: Subtraction", () => {

    const vec1 = new Vec3(4, 3, 9)
    const vec2 = new Vec3(1, 2, 3)

    test("modifies out vector with the result, when two vectors are added together", () => {
        const result = new Vec3()
        Vec3.subtract(result, vec1, vec2)

        expect(result.x()).toStrictEqual(3)
        expect(result.y()).toStrictEqual(1)
        expect(result.z()).toStrictEqual(6)
    })

    test("does not mutate either vectors, when two vectors are subtracted", () => {
        const result = new Vec3()
        Vec3.subtract(result, vec1, vec2)

        expect(vec1.x()).toStrictEqual(4)
        expect(vec1.y()).toStrictEqual(3)
        expect(vec1.z()).toStrictEqual(9)

        expect(vec2.x()).toStrictEqual(1)
        expect(vec2.y()).toStrictEqual(2)
        expect(vec2.z()).toStrictEqual(3)
    })

    test("returns the out vector, when two vectors are added together", () => {
        const out = new Vec3()
        const result = Vec3.subtract(out, vec1, vec2)

        expect(result).toBe(out)
    })
})



describe("Vector3D: Scalar Multiply", () => {

    const vec = new Vec3(3, 1, 6)
    const scalar = 2

    test("modifies out vector with the result, when vector is multiplied with a scalar", () => {
        const result = new Vec3()
        Vec3.multiplyScalar(result, vec, scalar)

        expect(result.x()).toStrictEqual(6)
        expect(result.y()).toStrictEqual(2)
        expect(result.z()).toStrictEqual(12)
    })

    test("does not mutate the vector,  when vector is multiplied with a scalar", () => {
        const result = new Vec3()
        Vec3.multiplyScalar(result, vec, scalar)

        expect(vec.x()).toStrictEqual(3)
        expect(vec.y()).toStrictEqual(1)
        expect(vec.z()).toStrictEqual(6)
    })

    test("returns the out vector, when two vectors are added together", () => {
        const out = new Vec3()
        const result = Vec3.multiplyScalar(out, vec, scalar)

        expect(result).toBe(out)
    })
})

describe("Vector3D: Dot", () => {

    const vec1 = new Vec3(3, 1, 6)
    const vec2 = new Vec3(1, 2, 3)

    test("returns the scalar product, when computing dot product of two vectors", () => {
        const result = Vec3.dot(vec1, vec2)

        expect(result).toStrictEqual(23)
    })

    test("dot product is commutative", () => {
        const a = Vec3.dot(vec1, vec2)
        const b = Vec3.dot(vec2, vec1)

        expect(a).toStrictEqual(b)
    })

    test("does not mutate either vectors, when computing dot product of two vectors", () => {
        const result = new Vec3()
        Vec3.subtract(result, vec1, vec2)

        expect(vec1.x()).toStrictEqual(3)
        expect(vec1.y()).toStrictEqual(1)
        expect(vec1.z()).toStrictEqual(6)

        expect(vec2.x()).toStrictEqual(1)
        expect(vec2.y()).toStrictEqual(2)
        expect(vec2.z()).toStrictEqual(3)
    })
})