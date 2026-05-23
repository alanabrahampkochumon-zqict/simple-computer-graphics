/**
 * Return a format number to fixed decimal and whole number place.
 * @param num          The number to format.
 * @param decimalWidth The number of decimal places to keep.
 *                     Default: 5
 * @param frontPadding The minimum of whole integers, if less padded with padding.
 *                     Default: 5
 * @param fillString   The character to apply as padding for whole number.
 *
 * @returns The formatted number with padding as necessary.
 */
export function fixedW(
    num: number,
    decimalWidth = 5,
    frontPadding = 5,
    fillString = " ",
) {
    return num.toFixed(decimalWidth).padStart(frontPadding, fillString);
}
