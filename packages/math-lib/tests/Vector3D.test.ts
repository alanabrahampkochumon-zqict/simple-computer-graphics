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