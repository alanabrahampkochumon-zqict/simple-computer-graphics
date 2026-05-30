import {describe, expect, test} from "vitest";
import {toDegrees, toRadians} from "../../src/lib/Utils";


const pi = Math.PI
const angleTestCases = [
    {360: 2 * pi},
    {180: pi},
    {90: pi / 2},
    {45: pi / 4},
    {0: 0}
]

describe("Utils: toRadians", () => {


    test.each(angleTestCases)("returns correct angle in radians when converting %o", (testCase) => {
        const [degrees, radians] = Object.entries(testCase)[0]
        expect(toRadians(parseInt(degrees))).toBeCloseTo(radians, 5)
    })
})


describe("Utils: toDegrees", () => {

    test.each(angleTestCases)("returns correct angle in degrees when converting %o", (testCase) => {
        const [degrees, radians] = Object.entries(testCase)[0]
        expect(toDegrees(radians)).toBeCloseTo(parseInt(degrees), 5)
    })
})