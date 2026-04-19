import { useState } from "react";
import AdjustmentSlider from "../../../components/AdjustmentSlider";
import DropdownList from "../../../components/DropdownList";

function AdjustmentPanel() {
    const [opacity, setOpacity] = useState(100);
    const blendingModes = ["Normal", "Multiply", "Add", "Subtract", "Divide"];
    const [currentBlendMode, setCurrentBlendMode] = useState(blendingModes[0]);
    return (
        <aside className="flex flex-col gap-6 pt-6 pb-4 pl-6 pr-4 color-surface-primary max-w-[400px] min-w-[320px] w-[35%] rounded-tl-3xl rounded-bl-3xl shadow-lg md:mt-4 md:mb-4 ">
            <h2 className="text-2xl font-semibold color-content-primary">
                Adjustments
            </h2>
            <div className="flex flex-col gap-4">
                <AdjustmentSlider
                    label="Opacity"
                    value={opacity}
                    onValueChange={(value) => {
                        setOpacity(value);
                    }}
                />
                <DropdownList
                    label="Blending Mode"
                    options={blendingModes}
                    currentOption={currentBlendMode}
                    onOptionChange={setCurrentBlendMode}
                />
            </div>
        </aside>
    );
}

export default AdjustmentPanel;
