import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const focusRing = tv({
    base: "outline outline-rose-600 dark:outline-rose-600 forced-colors:outline-[Highlight] outline-offset-2",
    variants: {
        isFocusVisible: {
            false: "outline-0",
            true: "outline-2",
        },
    },
});
