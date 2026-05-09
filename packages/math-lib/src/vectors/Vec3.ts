export class Vec3 {
    public readonly buffer: Float32Array = new Float32Array(3);

    /**
     * Instantiate a 3D vector with its components.
     * @param x The x-component.
     * @param y The y-component.
     * @param z The z-component.
     */
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.buffer[0] = x;
        this.buffer[1] = y;
        this.buffer[2] = z;
    }


    /**
     * Return the x-component of this vector.
     *
     * @returns The x-component of the vector.
     */
    x() {
        return this.buffer[0];
    }


    /**
     * Return the y-component of this vector.
     *
     * @returns The y-component of the vector.
     */
    y() {
        return this.buffer[1];
    }


    /**
     * Return the z-component of this vector.
     *
     * @returns The z-component of the vector.
     */
    z() {
        return this.buffer[2];
    }


    /**
     * Set the x-component of this vector the provided value.
     * @param value The value to set as x-component.
     *
     * @returns The current instance to enable chaining.
     */
    setX(value: number): Vec3 {
        this.buffer[0] = value;
        return this;
    }


    /**
     * Set the y-component of this vector the provided value.
     * @param value The value to set as y-component.
     *
     * @returns The current instance to enable chaining.
     */
    setY(value: number): Vec3 {
        this.buffer[1] = value;
        return this;
    }


    /**
     * Set the z-component of this vector the provided value.
     * @param value The value to set as z-component.
     *
     * @returns The current instance to enable chaining.
     */
    setZ(value: number): Vec3 {
        this.buffer[2] = value;
        return this;
    }

// TODO: Update to static method to prevent dead object creation
    /**
     * Perform a component-wise addition of two vectors and store the result in the out vector.
     *
     * @param out The vector to store the result the operation.
     * @param lhs The first vector to add.
     * @param rhs The second vector to add.
     *
     * @returns The out matrix to enable operation composition.
     */
    static add(out: Vec3, lhs: Vec3, rhs: Vec3): Vec3 {
        out.setX(lhs.x() + rhs.x())
        out.setY(lhs.y() + rhs.y())
        out.setZ(lhs.z() + rhs.z())

        return out;
    }


    /**
     * Perform a component-wise subtraction of two vectors and store the result in the out vector.
     *
     * @param out The vector to store the result the operation.
     * @param lhs The first vector to subtract.
     * @param rhs The second vector to subtract.
     *
     * @returns The out matrix to enable operation composition.
     */
    static subtract(out: Vec3, lhs: Vec3, rhs: Vec3): Vec3 {
        out.setX(lhs.x() - rhs.x())
        out.setY(lhs.y() - rhs.y())
        out.setZ(lhs.z() - rhs.z())

        return out;
    }

    /**
     * Multiply (scale) each component of a vector by a scalar.
     *
     * @param out    The vector to store the result the operation.
     * @param vec    The vector to scale.
     * @param scalar The scalar to scale the vector.
     *
     * @returns The out matrix to enable operation composition.
     */
    static multiplyScalar(out: Vec3, vec: Vec3, scalar: number): Vec3 {
        out.setX(vec.x() * scalar)
        out.setY(vec.y() * scalar)
        out.setZ(vec.z() * scalar)

        return out;
    }


    /**
     * Compute the dot product between two vectors.
     * @param lhs The vector to compute the dot product with.
     * @param rhs The vector to compute the dot product against.
     *
     * @returns The scalar product(dot product) between the two vectors.
     */
    static dot(lhs: Vec3, rhs: Vec3): number {
        return lhs.x() * rhs.x() + lhs.y() * rhs.y() + lhs.z() * rhs.z()
    }

}
