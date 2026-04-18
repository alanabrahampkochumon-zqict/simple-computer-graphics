import { Slider } from "radix-ui";
import Label from "./Label";

type AdjustmentSliderParams = {
    value: number;
    onValueChange: (value: number) => void;
    label: string;
    showPercentage?: boolean;
    min?: number;
    max?: number;
    steps?: number;
    defaultValue?: number;
};

export default function AdjustmentSlider({
    value,
    onValueChange,
    label,
    showPercentage = true,
    min = 0,
    max = 100,
    steps = 1,
    defaultValue = 100,
}: AdjustmentSliderParams) {
    const percentage = Math.round((value / (max - min)) * 100);
    return (
        <div className="flex flex-col gap-2 justify-between items-center">
            <div className="w-full flex gap-3 justify-between items-center">
                <Label>{label}</Label>
                {showPercentage && (
                    <p className="color-content-secondary text-base font-normal">
                        {percentage}%
                    </p>
                )}
            </div>
            <Slider.Root
                className="h-8  w-full relative flex items-center select-none touch-none"
                defaultValue={[defaultValue]}
                max={max}
                min={min}
                value={[value]}
                onValueChange={([value]) => onValueChange(value)}
                step={steps}
            >
                <Slider.Track className="shadow-inner color-surface-tertiary relative flex-1 h-2 w-full rounded-full">
                    <Slider.Range className="absolute h-full color-surface-accent rounded-full" />
                </Slider.Track>
                <Slider.Thumb
                    className="h-8 w-12 color-surface-primary rounded-full block shadow-sm hover:scale-105 active:scale-95 transition cursor-pointer focus:outline-0 ring-1 ring-transparent focus-within:ring-rose-600"
                    aria-label="Volume"
                />
            </Slider.Root>
        </div>
    );
}
