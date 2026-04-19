import type { BlendingMode } from "./BlendingModes";

class Layer {
    blendingMode: BlendingMode; // The blending mode for the current layer.
    originalImage: any; // The original image pixel values.
    modifiedImage: any; // TODO: Type
    opacity: number; // The transparency of the layer.
    visible: boolean; // Whether layer is visible on canvas, and finally in export.
    order: number; // Layer order
    transform: any; // TOOD: Type // The transformation matrix of the layer.
}
