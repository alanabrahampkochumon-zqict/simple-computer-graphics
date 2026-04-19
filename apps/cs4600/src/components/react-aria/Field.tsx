import {
    type FieldErrorProps,
    FieldError as RACFieldError,
} from "react-aria-components/FieldError";
import {
    type InputProps,
    Input as RACInput,
} from "react-aria-components/Input";
import { Text, type TextProps } from "react-aria-components/Text";
import { twMerge } from "tailwind-merge";
import { cn } from "../../libs/utils";

export function Description(props: TextProps) {
    return (
        <Text
            {...props}
            slot="description"
            className={twMerge("text-sm text-neutral-600", props.className)}
        />
    );
}

export function FieldError(props: FieldErrorProps) {
    return (
        <RACFieldError
            {...props}
            className={cn(props.className, "text-sm content-color-error")}
        />
    );
}

export function Input(props: InputProps) {
    return <RACInput {...props} className={cn(props.className, "")} />;
    // px-3 py-0 min-h-9 flex-1 min-w-0 border-0 outline outline-0 bg-white dark:bg-neutral-900 font-sans text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-600 dark:placeholder:text-neutral-400 disabled:text-neutral-200 dark:disabled:text-neutral-600 disabled:placeholder:text-neutral-200 dark:disabled:placeholder:text-neutral-600 [-webkit-tap-highlight-color:transparent]
}
