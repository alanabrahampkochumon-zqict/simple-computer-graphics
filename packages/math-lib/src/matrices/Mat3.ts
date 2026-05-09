export class Mat3 {
    public readonly buffer: Float32Array = new Float32Array(9);


    /**
     * Instantiate a 3D matrix using the provided entries.
     * @param m00 The element in the first row and first column.
     * @param m01 The element in the first row and second column.
     * @param m02 The element in the first row and third column.
     * @param m10 The element in the second row and first column.
     * @param m11 The element in the second row and second column.
     * @param m12 The element in the second row and third column.
     * @param m20 The element in the third row and first column.
     * @param m21 The element in the third row and second column.
     * @param m22 The element in the third row and third column.
     */
    constructor(m00: number = 1, m01: number = 0, m02: number = 0, m10: number = 0, m11: number = 1, m12: number = 0, m20: number = 0, m21: number = 0, m22: number = 1) {
        this.buffer[0] = m00;
        this.buffer[1] = m10;
        this.buffer[2] = m20;
        this.buffer[3] = m01;
        this.buffer[4] = m11;
        this.buffer[5] = m21;
        this.buffer[6] = m02;
        this.buffer[7] = m12;
        this.buffer[8] = m22;
    }

    /**
     * Returns the element at row, col index of the matrix.
     * @param row The target row of the element.
     * @param col The target column of the element.
     */
    get(row: number, col: number) {
        if (row > 3 || col > 3)
            throw new Error(`Out of bounds access: (i=${row}, j=${col})`)
        return this.buffer[col * 3 + row]
    }


    /**
     * Put an element at row, col index of the matrix.
     * @param row The target row.
     * @param col The target column.
     * @param value The element to put at the target index.
     */
    set(row: number, col: number, value: number) {
        if (row > 3 || col > 3)
            throw new Error(`Out of bounds access: (i=${row}, j=${col})`)
        return this.buffer[col * 3 + row] = value;
    }


    /**
     * Add two matrix together and store the result in the out matrix.
     * @param out The matrix to store the result of the operation.
     * @param lhs The first to add.
     * @param rhs The second matrix to add.
     *
     * @returns The out matrix to enable operation composition.
     */
    static add(out: Mat3, lhs: Mat3, rhs: Mat3): Mat3 {
        out.set(0, 0, lhs.get(0, 0) + rhs.get(0, 0))
        out.set(0, 1, lhs.get(0, 1) + rhs.get(0, 1))
        out.set(0, 2, lhs.get(0, 2) + rhs.get(0, 2))
        out.set(1, 0, lhs.get(1, 0) + rhs.get(1, 0))
        out.set(1, 1, lhs.get(1, 1) + rhs.get(1, 1))
        out.set(1, 2, lhs.get(1, 2) + rhs.get(1, 2))
        out.set(2, 0, lhs.get(2, 0) + rhs.get(2, 0))
        out.set(2, 1, lhs.get(2, 1) + rhs.get(2, 1))
        out.set(2, 2, lhs.get(2, 2) + rhs.get(2, 2))

        return out;
    }
}
