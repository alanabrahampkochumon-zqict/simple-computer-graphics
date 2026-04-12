import { Slider } from "radix-ui";

export default function AdjustmentSlider() {
    return (
        <form>
            <Slider.Root
                className="h-8  w-full relative flex items-center select-none touch-none"
                defaultValue={[50]}
                max={100}
                step={1}
            >
                <Slider.Track className="shadow-inner color-surface-tertiary relative flex-1 h-2 w-full rounded-full">
                    <Slider.Range className="absolute h-full color-surface-accent rounded-full" />
                </Slider.Track>
                <Slider.Thumb
                    className="h-8 w-12 color-surface-primary rounded-full block shadow-sm hover:scale-105 active:scale-95 transition cursor-pointer focus:outline-0 ring-1 ring-transparent focus:ring-rose-600 "
                    aria-label="Volume"
                />
            </Slider.Root>
        </form>
    );
}
