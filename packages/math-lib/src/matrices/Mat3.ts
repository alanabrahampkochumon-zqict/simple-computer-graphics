import type {Vec3} from "../vectors/Vec3.ts";

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
     * @param lhs The first matrix to add.
     * @param rhs The second matrix to add.
     *
     * @returns The out matrix to enable operation composition.
     */
    static add(out: Mat3, lhs: Mat3, rhs: Mat3): Mat3 {
        out.buffer[0] = lhs.buffer[0] + rhs.buffer[0]
        out.buffer[1] = lhs.buffer[1] + rhs.buffer[1]
        out.buffer[2] = lhs.buffer[2] + rhs.buffer[2]
        out.buffer[3] = lhs.buffer[3] + rhs.buffer[3]
        out.buffer[4] = lhs.buffer[4] + rhs.buffer[4]
        out.buffer[5] = lhs.buffer[5] + rhs.buffer[5]
        out.buffer[6] = lhs.buffer[6] + rhs.buffer[6]
        out.buffer[7] = lhs.buffer[7] + rhs.buffer[7]
        out.buffer[8] = lhs.buffer[8] + rhs.buffer[8]

        return out;
    }


    /**
     * Subtract two matrices and store the result in the out matrix.
     * @param out The matrix to store the result of the operation.
     * @param lhs The matrix to subtract from.
     * @param rhs The matrix to subtract.
     *
     * @returns The out matrix to enable operation composition.
     */
    static subtract(out: Mat3, lhs: Mat3, rhs: Mat3): Mat3 {
        out.buffer[0] = lhs.buffer[0] - rhs.buffer[0]
        out.buffer[1] = lhs.buffer[1] - rhs.buffer[1]
        out.buffer[2] = lhs.buffer[2] - rhs.buffer[2]
        out.buffer[3] = lhs.buffer[3] - rhs.buffer[3]
        out.buffer[4] = lhs.buffer[4] - rhs.buffer[4]
        out.buffer[5] = lhs.buffer[5] - rhs.buffer[5]
        out.buffer[6] = lhs.buffer[6] - rhs.buffer[6]
        out.buffer[7] = lhs.buffer[7] - rhs.buffer[7]
        out.buffer[8] = lhs.buffer[8] - rhs.buffer[8]

        return out;
    }


    /**
     * Multiply(scale) a matrix by a factor and store the result in the out matrix.
     *
     * @param out The matrix to store the result of the operation.
     * @param mat The matrix to multiply.
     * @param scalar The scalar to multiply.
     *
     * @returns The out matrix to enable operation composition.
     */
    static multiplyScalar(out: Mat3, mat: Mat3, scalar: number): Mat3 {
        out.buffer[0] = mat.buffer[0] * scalar
        out.buffer[1] = mat.buffer[1] * scalar
        out.buffer[2] = mat.buffer[2] * scalar
        out.buffer[3] = mat.buffer[3] * scalar
        out.buffer[4] = mat.buffer[4] * scalar
        out.buffer[5] = mat.buffer[5] * scalar
        out.buffer[6] = mat.buffer[6] * scalar
        out.buffer[7] = mat.buffer[7] * scalar
        out.buffer[8] = mat.buffer[8] * scalar

        return out;
    }

    /**
     * Multiply a matrix with another and store the result in the out matrix.
     *
     * @param out The matrix to store the result of the operation.
     * @param lhs The first matrix to multiply.
     * @param rhs The second matrix to multiply.
     *
     * @returns The out matrix to enable operation composition.
     */
    static multiply(out: Mat3, lhs: Mat3, rhs: Mat3): Mat3 {
        out.buffer[0] = lhs.buffer[0] * rhs.buffer[0] + lhs.buffer[3] * rhs.buffer[1] + lhs.buffer[6] * rhs.buffer[2];
        out.buffer[1] = lhs.buffer[1] * rhs.buffer[0] + lhs.buffer[4] * rhs.buffer[1] + lhs.buffer[7] * rhs.buffer[2];
        out.buffer[2] = lhs.buffer[2] * rhs.buffer[0] + lhs.buffer[5] * rhs.buffer[1] + lhs.buffer[8] * rhs.buffer[2];
        out.buffer[3] = lhs.buffer[0] * rhs.buffer[3] + lhs.buffer[3] * rhs.buffer[4] + lhs.buffer[6] * rhs.buffer[5];
        out.buffer[4] = lhs.buffer[1] * rhs.buffer[3] + lhs.buffer[4] * rhs.buffer[4] + lhs.buffer[7] * rhs.buffer[5];
        out.buffer[5] = lhs.buffer[2] * rhs.buffer[3] + lhs.buffer[5] * rhs.buffer[4] + lhs.buffer[8] * rhs.buffer[5];
        out.buffer[6] = lhs.buffer[0] * rhs.buffer[6] + lhs.buffer[3] * rhs.buffer[7] + lhs.buffer[6] * rhs.buffer[8];
        out.buffer[7] = lhs.buffer[1] * rhs.buffer[6] + lhs.buffer[4] * rhs.buffer[7] + lhs.buffer[7] * rhs.buffer[8];
        out.buffer[8] = lhs.buffer[2] * rhs.buffer[6] + lhs.buffer[5] * rhs.buffer[7] + lhs.buffer[8] * rhs.buffer[8];

        return out;
    }


    /**
     * Multiply a matrix with a vector to perform a linear transformation.
     * @param out The matrix to store the result of the operation.
     * @param mat The matrix to multiply.
     * @param vec The vector to multiply.
     *
     * @returns The out matrix to enable operation composition.
     */
    static multiplyVec(out: Vec3, mat: Mat3, vec: Vec3): Vec3 {
        out.buffer[0] = mat.buffer[0] * vec.buffer[0] + mat.buffer[3] * vec.buffer[1] + mat.buffer[6] * vec.buffer[2];
        out.buffer[1] = mat.buffer[1] * vec.buffer[0] + mat.buffer[4] * vec.buffer[1] + mat.buffer[7] * vec.buffer[2];
        out.buffer[2] = mat.buffer[2] * vec.buffer[0] + mat.buffer[5] * vec.buffer[1] + mat.buffer[8] * vec.buffer[2];
        return out;
    }




}
