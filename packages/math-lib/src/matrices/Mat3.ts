export class Mat3 {
    public readonly buffer: Float32Array = new Float32Array(9);


    constructor(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number) {
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
}
