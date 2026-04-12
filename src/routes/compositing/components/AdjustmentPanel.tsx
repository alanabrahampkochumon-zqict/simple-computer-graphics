import { useState } from "react";
import AdjustmentSlider from "../../../components/AdjustmentSlider";

function AdjustmentPanel() {
    const [opacity, setOpacity] = useState(100);
    return (
        <aside className="pt-6 pb-4 pl-6 pr-4 color-surface-primary max-w-[400px] min-w-[320px] w-[35%] rounded-tl-3xl rounded-bl-3xl shadow-lg md:mt-4 md:mb-4">
            <h2 className="text-2xl font-semibold color-content-primary">
                Adjustments
            </h2>
            <AdjustmentSlider
                label="Opacity"
                value={opacity}
                onValueChange={(value) => {
                    setOpacity(value);
                }}
            />
        </aside>
    );
}

export default AdjustmentPanel;
