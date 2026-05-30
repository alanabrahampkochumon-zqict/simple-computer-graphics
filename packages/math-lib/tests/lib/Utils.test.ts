import {describe, expect, test} from "vitest";
import {toRadians} from "../../src/lib/Utils";

describe("Utils: toRadians", () => {
    const pi = Math.PI
    const testCases = [
        {360: 2 * pi},
        {180: pi},
        {90: pi / 2},
        {45: pi / 4},
        {0: 0}
    ]

    test.each(testCases)("returns correct angle in radian when converting %o", (testCase) => {
        const [degrees, radians] = Object.entries(testCase)[0]
        expect(toRadians(parseInt(degrees))).toBeCloseTo(radians, 5)
    })
})