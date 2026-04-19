import { ChevronDown } from "lucide-react";
import React from "react";
import {
    Select as AriaSelect,
    type SelectProps as AriaSelectProps,
    Button,
    ListBox,
    type ListBoxItemProps,
    SelectValue,
    type ValidationResult,
} from "react-aria-components/Select";
import { tv } from "tailwind-variants";
import { cn, focusRing } from "../libs/utils";
import { Description, FieldError } from "./Field";
import Label from "./Label";
import {
    DropdownItem,
    DropdownSection,
    type DropdownSectionProps,
} from "./ListBox";
import { Popover } from "./react-aria/Popover";

const styles = tv({
    extend: focusRing,
    base: "flex items-center text-start gap-4 w-full color-surface-secondary rounded-2xl pl-4 pr-4 pt-3 pb-3 flex gap-2 hover:brightness-95 transition cursor-pointer shadow-xs",
    variants: {
        isDisabled: {
            false: "text-neutral-800 hover:bg-neutral-100 pressed:bg-neutral-200 group-invalid:outline group-invalid:outline-red-600",
            true: "border-transparent text-neutral-200 bg-neutral-100",
        },
    },
});

export interface SelectProps<
    T extends object,
    M extends "single" | "multiple",
> extends Omit<AriaSelectProps<T, M>, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items?: Iterable<T>;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function Select<
    T extends object,
    M extends "single" | "multiple" = "single",
>({
    label,
    description,
    errorMessage,
    children,
    items,
    ...props
}: SelectProps<T, M>) {
    return (
        <AriaSelect
            {...props}
            className={cn(
                props.className,
                "group flex flex-col gap-2 relative font-sans",
            )}
        >
            {label && <Label>{label}</Label>}
            <Button className={styles}>
                <SelectValue className="flex-1 text-sm">
                    {({ selectedText, defaultChildren }) =>
                        selectedText || defaultChildren
                    }
                </SelectValue>
                <ChevronDown
                    aria-hidden
                    className="w-4 h-4 text-neutral-600 dark:text-neutral-400 forced-colors:text-[ButtonText] group-disabled:text-neutral-200 dark:group-disabled:text-neutral-600 forced-colors:group-disabled:text-[GrayText]"
                />
            </Button>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <Popover className="min-w-(--trigger-width)">
                <ListBox
                    items={items}
                    className="outline-hidden box-border p-1 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]"
                >
                    {children}
                </ListBox>
            </Popover>
        </AriaSelect>
    );
}

export function SelectItem(props: ListBoxItemProps) {
    return <DropdownItem {...props} />;
}

export function SelectSection<T extends object>(
    props: DropdownSectionProps<T>,
) {
    return <DropdownSection {...props} />;
}
