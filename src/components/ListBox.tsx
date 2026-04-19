import { Check } from "lucide-react";
import {
    ListBoxItem as AriaListBoxItem,
    Collection,
    Header,
    ListBoxSection,
    type ListBoxItemProps,
    type ListBoxSectionProps,
} from "react-aria-components/ListBox";
import { composeRenderProps } from "react-aria-components/composeRenderProps";
import { tv } from "tailwind-variants";

const dropdownItemStyles = tv({
    base: "group flex justify-between items-center p-4 pl-6 pr-6 color-surface-primary rounded-xl text-base cursor-pointer transition",
    variants: {
        isDisabled: {
            false: "text-neutral-900",
            true: "text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]",
        },
        isPressed: {
            true: "bg-neutral-100 text-neutral-900",
        },
        isFocused: {
            true: "bg-rose-600 text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
        },
        isHover: {
            true: "bg-blue-500",
        },
    },
    compoundVariants: [
        {
            isFocused: false,
            isOpen: true,
            className: "bg-neutral-100",
        },
    ],
});

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
                    {isSelected && <Check className="w-4 h-4" />}
                </>
            ))}
        </AriaListBoxItem>
    );
}

export interface DropdownSectionProps<T> extends ListBoxSectionProps<T> {
    title?: string;
    items?: any;
}

export function DropdownSection<T extends object>(
    props: DropdownSectionProps<T>,
) {
    return (
        <ListBoxSection className="first:-mt-[5px] after:content-[''] after:block after:h-[5px] last:after:hidden">
            <Header className="text-sm font-semibold text-neutral-500 dark:text-neutral-300 px-4 py-1 truncate sticky -top-[5px] -mt-px -mx-1 z-10 bg-neutral-100/60 dark:bg-neutral-700/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-neutral-100 border-y border-y-neutral-200 dark:border-y-neutral-700 [&+*]:mt-1 bg-red-500">
                {props.title}
            </Header>
            <Collection items={props.items}>{props.children}</Collection>
        </ListBoxSection>
    );
}
