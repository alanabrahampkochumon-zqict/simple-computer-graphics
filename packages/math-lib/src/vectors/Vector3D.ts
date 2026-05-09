export class Vector3D {
    public readonly buffer: Float32Array;

    /**
     * Instantiate a 3D vector with its components.
     * @param x The x component.
     * @param y The y component.
     * @param z The z component.
     */
    constructor(x: number, y: number, z: number) {
        this.buffer = new Float32Array(3);
        this.buffer[0] = x;
        this.buffer[1] = y;
        this.buffer[2] = z;
    }

    x() {
        return this.buffer[0];
    }

    y() {
        return this.buffer[1];
    }

    z() {
        this.buffer[2];
    }
}
