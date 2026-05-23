import { fixedW } from "../lib/Utils.js";
import type { Vec3 } from "../vectors/Vec3.ts";

/**
 * Definition of a 3x3 square matrix.
 *
 * @export
 */
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
    constructor(
        m00: number = 1,
        m01: number = 0,
        m02: number = 0,
        m10: number = 0,
        m11: number = 1,
        m12: number = 0,
        m20: number = 0,
        m21: number = 0,
        m22: number = 1,
    ) {
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
     * Return a string representation of this matrix.
     */
    toString() {
        return `
        | ${fixedW(this.buffer[0])}, ${fixedW(this.buffer[3])}, ${fixedW(this.buffer[6])} |
        | ${fixedW(this.buffer[1])}, ${fixedW(this.buffer[4])}, ${fixedW(this.buffer[7])} |
        | ${fixedW(this.buffer[2])}, ${fixedW(this.buffer[5])}, ${fixedW(this.buffer[8])} |
        `;
    }

    /**
     * Returns the element at row, col index of the matrix.
     * @param row The target row of the element.
     * @param col The target column of the element.
     */
    get(row: number, col: number) {
        if (row > 3 || col > 3)
            throw new Error(`Out of bounds access: (i=${row}, j=${col})`);
        return this.buffer[col * 3 + row];
    }

    /**
     * Put an element at row, col index of the matrix.
     * @param row The target row.
     * @param col The target column.
     * @param value The element to put at the target index.
     */
    set(row: number, col: number, value: number) {
        if (row > 3 || col > 3)
            throw new Error(`Out of bounds access: (i=${row}, j=${col})`);
        return (this.buffer[col * 3 + row] = value);
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
        out.set(0, 0, lhs.get(0, 0) + rhs.get(0, 0));
        out.set(0, 1, lhs.get(0, 1) + rhs.get(0, 1));
        out.set(0, 2, lhs.get(0, 2) + rhs.get(0, 2));
        out.set(1, 0, lhs.get(1, 0) + rhs.get(1, 0));
        out.set(1, 1, lhs.get(1, 1) + rhs.get(1, 1));
        out.set(1, 2, lhs.get(1, 2) + rhs.get(1, 2));
        out.set(2, 0, lhs.get(2, 0) + rhs.get(2, 0));
        out.set(2, 1, lhs.get(2, 1) + rhs.get(2, 1));
        out.set(2, 2, lhs.get(2, 2) + rhs.get(2, 2));

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
        out.set(0, 0, lhs.get(0, 0) - rhs.get(0, 0));
        out.set(0, 1, lhs.get(0, 1) - rhs.get(0, 1));
        out.set(0, 2, lhs.get(0, 2) - rhs.get(0, 2));
        out.set(1, 0, lhs.get(1, 0) - rhs.get(1, 0));
        out.set(1, 1, lhs.get(1, 1) - rhs.get(1, 1));
        out.set(1, 2, lhs.get(1, 2) - rhs.get(1, 2));
        out.set(2, 0, lhs.get(2, 0) - rhs.get(2, 0));
        out.set(2, 1, lhs.get(2, 1) - rhs.get(2, 1));
        out.set(2, 2, lhs.get(2, 2) - rhs.get(2, 2));

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
        out.set(0, 0, mat.get(0, 0) * scalar);
        out.set(0, 1, mat.get(0, 1) * scalar);
        out.set(0, 2, mat.get(0, 2) * scalar);
        out.set(1, 0, mat.get(1, 0) * scalar);
        out.set(1, 1, mat.get(1, 1) * scalar);
        out.set(1, 2, mat.get(1, 2) * scalar);
        out.set(2, 0, mat.get(2, 0) * scalar);
        out.set(2, 1, mat.get(2, 1) * scalar);
        out.set(2, 2, mat.get(2, 2) * scalar);

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
        out.set(
            0,
            0,
            lhs.get(0, 0) * rhs.get(0, 0) +
                lhs.get(0, 1) * rhs.get(1, 0) +
                lhs.get(0, 2) * rhs.get(2, 0),
        );
        out.set(
            0,
            1,
            lhs.get(0, 0) * rhs.get(0, 1) +
                lhs.get(0, 1) * rhs.get(1, 1) +
                lhs.get(0, 2) * rhs.get(2, 1),
        );
        out.set(
            0,
            2,
            lhs.get(0, 0) * rhs.get(0, 2) +
                lhs.get(0, 1) * rhs.get(1, 2) +
                lhs.get(0, 2) * rhs.get(2, 2),
        );
        out.set(
            1,
            0,
            lhs.get(1, 0) * rhs.get(0, 0) +
                lhs.get(1, 1) * rhs.get(1, 0) +
                lhs.get(1, 2) * rhs.get(2, 0),
        );
        out.set(
            1,
            1,
            lhs.get(1, 0) * rhs.get(0, 1) +
                lhs.get(1, 1) * rhs.get(1, 1) +
                lhs.get(1, 2) * rhs.get(2, 1),
        );
        out.set(
            1,
            2,
            lhs.get(1, 0) * rhs.get(0, 2) +
                lhs.get(1, 1) * rhs.get(1, 2) +
                lhs.get(1, 2) * rhs.get(2, 2),
        );
        out.set(
            2,
            0,
            lhs.get(2, 0) * rhs.get(0, 0) +
                lhs.get(2, 1) * rhs.get(1, 0) +
                lhs.get(2, 2) * rhs.get(2, 0),
        );
        out.set(
            2,
            1,
            lhs.get(2, 0) * rhs.get(0, 1) +
                lhs.get(2, 1) * rhs.get(1, 1) +
                lhs.get(2, 2) * rhs.get(2, 1),
        );
        out.set(
            2,
            2,
            lhs.get(2, 0) * rhs.get(0, 2) +
                lhs.get(2, 1) * rhs.get(1, 2) +
                lhs.get(2, 2) * rhs.get(2, 2),
        );

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
        out.setX(
            mat.get(0, 0) * vec.x() +
                mat.get(0, 1) * vec.y() +
                mat.get(0, 2) * vec.z(),
        );
        out.setY(
            mat.get(1, 0) * vec.x() +
                mat.get(1, 1) * vec.y() +
                mat.get(1, 2) * vec.z(),
        );
        out.setZ(
            mat.get(2, 0) * vec.x() +
                mat.get(2, 1) * vec.y() +
                mat.get(2, 2) * vec.z(),
        );
        return out;
    }

    /**
     * Divide a matrix by a factor and store the result in the out matrix.
     *
     * @param out The matrix to store the result of the operation.
     * @param mat The matrix to divide.
     * @param scalar The scalar to divide by.
     *
     * @returns The out matrix to enable operation composition.
     */
    static div(out: Mat3, mat: Mat3, scalar: number): Mat3 {
        const factor = 1 / scalar;
        out.set(0, 0, mat.get(0, 0) * factor);
        out.set(0, 1, mat.get(0, 1) * factor);
        out.set(0, 2, mat.get(0, 2) * factor);
        out.set(1, 0, mat.get(1, 0) * factor);
        out.set(1, 1, mat.get(1, 1) * factor);
        out.set(1, 2, mat.get(1, 2) * factor);
        out.set(2, 0, mat.get(2, 0) * factor);
        out.set(2, 1, mat.get(2, 1) * factor);
        out.set(2, 2, mat.get(2, 2) * factor);

        return out;
    }

    /**
     * Transpose a matrix by exchanging its rows and columns and store the result in the out matrix.
     *
     * @param out The matrix to store the result of the transposition.
     * @param mat The matrix to transpose.
     *
     * @returns The out matrix to enable operation composition.
     */
    static transpose(out: Mat3, mat: Mat3): Mat3 {
        out.set(0, 0, mat.get(0, 0));
        out.set(0, 1, mat.get(1, 0));
        out.set(0, 2, mat.get(2, 0));
        out.set(1, 0, mat.get(0, 1));
        out.set(1, 1, mat.get(1, 1));
        out.set(1, 2, mat.get(2, 1));
        out.set(2, 0, mat.get(0, 2));
        out.set(2, 1, mat.get(1, 2));
        out.set(2, 2, mat.get(2, 2));

        return out;
    }

    /**
     * Return the determinant of this matrix.
     *
     * @param mat The matrix to take the determinant of.
     *
     * @returns The out matrix to enable operation composition.
     */
    static det(mat: Mat3): number {
        const bM = mat.buffer;

        const t00 = bM[4] * bM[8] - bM[5] * bM[7];
        const t01 = bM[1] * bM[8] - bM[2] * bM[7];
        const t02 = bM[1] * bM[5] - bM[2] * bM[4];

        return bM[0] * t00 - bM[3] * t01 + bM[6] * t02;
    }

    /**
     * Take the inverse of the given matrix and store the result in the out matrix.
     *
     * @param out The matrix to store the result of the transposition.
     * @param mat The matrix to transpose.
     *
     * @returns The out matrix to enable operation composition,
     *          or null if a singular matrix is provided.
     */
    static inv(out: Mat3, mat: Mat3): Mat3 | null {
        // First 3 cofactors
        const bM = mat.buffer;
        const bO = out.buffer;

        const m00 = bM[0],
            m10 = bM[1],
            m20 = bM[2];
        const m01 = bM[3],
            m11 = bM[4],
            m21 = bM[5];
        const m02 = bM[6],
            m12 = bM[7],
            m22 = bM[8];

        const c00 = m11 * m22 - m12 * m21;
        const c01 = m12 * m20 - m10 * m22;
        const c02 = m10 * m21 - m11 * m20;

        const det = m00 * c00 + m01 * c01 + m02 * c02;

        if (det === 0) return null;

        const invDet = 1 / det;

        bO[0] = c00 * invDet;
        bO[1] = c01 * invDet;
        bO[2] = c02 * invDet;

        bO[3] = (m02 * m21 - m01 * m22) * invDet;
        bO[4] = (m00 * m22 - m02 * m20) * invDet;
        bO[5] = (m01 * m20 - m00 * m21) * invDet;

        bO[6] = (m01 * m12 - m02 * m11) * invDet;
        bO[7] = (m02 * m10 - m00 * m12) * invDet;
        bO[8] = (m00 * m11 - m01 * m10) * invDet;
        
        return out;
    }
}
