import { Check } from "lucide-react";
import {
    ListBoxItem as AriaListBoxItem,
    type ListBoxItemProps,
} from "react-aria-components/ListBox";
import { composeRenderProps } from "react-aria-components/composeRenderProps";
import { tv } from "tailwind-variants";

const dropdownItemStyles = tv({
    base: "group flex justify-between items-center p-4 pl-6 pr-6 color-surface-primary rounded-xl text-base cursor-pointer transition-colors",
    variants: {
        isDisabled: {
            false: "color-content-secondary",
            true: "color-content-disabled",
        },
        isPressed: {
            true: "bg-neutral-100 text-neutral-900",
        },
        isFocused: {
            true: "color-surface-accent color-content-oncolor outline-0 transition-colors",
        },
    },
}); // TODO: Add transition

export function DropdownItem(props: ListBoxItemProps) {
    const textValue =
        props.textValue ||
        (typeof props.children === "string" ? props.children : undefined);
    return (
        <AriaListBoxItem
            {...props}
            textValue={textValue}
            className={dropdownItemStyles}
        >
            {composeRenderProps(props.children, (children, { isSelected }) => (
                <>
                    <span>{children}</span>
                    {isSelected && <Check className="w-6 h-6" />}
                </>
            ))}
        </AriaListBoxItem>
    );
}
