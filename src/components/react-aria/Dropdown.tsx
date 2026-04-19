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
import { cn, focusRing } from "../../libs/utils";
import Label from "../Label";
import { Description, FieldError } from "./Field";
import { DropdownItem } from "./ListBox";
import { Popover } from "./Popover";

const styles = tv({
    extend: focusRing,
    base: "flex items-center text-start gap-4 w-full color-surface-secondary rounded-2xl pl-4 pr-4 pt-3 pb-3 flex gap-2 transition cursor-pointer shadow-xs",
    variants: {
        isDisabled: {
            false: "color-content-secondary hover:brightness-95 pressed:bg-gray-200 group-invalid:outline group-invalid:outline-red-600",
            true: "border-transparent text-gray-200 color-surface-disabled color-content-disabled cursor-not-allowed",
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
                <SelectValue className="flex-1">
                    {({ selectedText, defaultChildren }) =>
                        selectedText || defaultChildren
                    }
                </SelectValue>
                <ChevronDown
                    aria-hidden
                    className="color-content-tertiary w-6 h-6"
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
