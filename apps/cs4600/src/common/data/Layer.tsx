import type {BlendingMode} from "./BlendingModes";
import type {Mat3} from "@falcon-ts/math-lib/src";

export class Layer {
    blendingMode: BlendingMode = "Normal"; // The blending mode for the current layer.
    originalImage: ImageBitmap; // The original image pixel values.
    opacity: number; // The transparency of the layer.
    visible: boolean; // Whether layer is visible on canvas, and finally in export.
    stackOrder: number; // Layer order
    transform: Mat3; // The transformation matrix of the layer.

    constructor(
        originalImage: ImageBitmap,
        stackOrder?: number,
        transform?: any,
        opacity?: number,
        visible?: boolean,
    ) {
        this.originalImage = originalImage;
        this.opacity = opacity || 0;
        if (this.opacity < 0 || this.opacity > 100)
            throw new Error("Opacity of a layer must be between 0 and 100.");
        this.stackOrder = stackOrder || 0;
        this.transform = transform;
        this.visible = visible || true;
    }
}
