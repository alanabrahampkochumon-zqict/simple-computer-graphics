import type { Layer } from "../common/data/Layer";
import Label from "./Label";

function LayerPanel() {
    const layers: Layer[] = [];
    return (
        <div className="flex flex-col gap-2 flex-1">
            <Label>Layers</Label>
            <div className="color-surface-secondary flex-1 shadow-inner rounded-2xl">
                {!layers ||
                    (layers.length < 1 && (
                        <div className="flex flex-col mt-auto mb-auto h-full items-center justify-center">
                            <div className="flex flex-col gap-1 color-content-tertiary text-center">
                                <h3 className="text-2xl font-semibold">
                                    No layers added
                                </h3>
                                <p className="text-base pl-2 pr-2">
                                    Drag a file or click the "Add Layer" button
                                    to create a layer.
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default LayerPanel;
