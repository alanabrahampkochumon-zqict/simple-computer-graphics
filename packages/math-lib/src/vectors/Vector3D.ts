export class Vector3D {
    public readonly buffer: Float32Array;

    /**
     * Instantiate a 3D vector with its components.
     * @param x The x-component.
     * @param y The y-component.
     * @param z The z-component.
     */
    constructor(x: number, y: number, z: number) {
        this.buffer = new Float32Array(3);
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
    setX(value: number): Vector3D {
        this.buffer[0] = value;
        return this;
    }


    /**
     * Set the y-component of this vector the provided value.
     * @param value The value to set as y-component.
     *
     * @returns The current instance to enable chaining.
     */
    setY(value: number): Vector3D {
        this.buffer[1] = value;
        return this;
    }


    /**
     * Set the z-component of this vector the provided value.
     * @param value The value to set as z-component.
     *
     * @returns The current instance to enable chaining.
     */
    setZ(value: number): Vector3D {
        this.buffer[2] = value;
        return this;
    }
}
