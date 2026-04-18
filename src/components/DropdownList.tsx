import { DropdownMenu } from "radix-ui";
import Label from "./Label";
type DropdownListProps = {
    label: string;
    currentOption: string;
    options: string[];
    onOptionChange: (option: string) => void;
};

import { CheckIcon, ChevronDown } from "lucide-react";
import { cn } from "../libs/utils";

function DropdownList({
    label,
    currentOption,
    options,
    onOptionChange,
}: DropdownListProps) {
    return (
        <div className="flex flex-col gap-2">
            <Label>{label}</Label>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button
                        className="color-surface-secondary rounded-2xl pl-4 pr-4 pt-3 pb-3 flex gap-2 focus:outline-none hover:brightness-95 transition cursor-pointer"
                        aria-label={label}
                    >
                        <span className="flex-1 text-left color-content-primary text-base font-normal">
                            {currentOption}
                        </span>
                        <ChevronDown className="color-content-tertiary" />
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className="color-surface-primary w-[320px] shadow-xl p-4 pt-4 pb-4 rounded-2xl"
                        sideOffset={5}
                    >
                        {options.map((option) => (
                            <DropdownMenu.Item
                                className={cn(
                                    "p-4 pl-6 pr-6 color-surface-primary rounded-xl text-base cursor-pointer focus:outline-none hover:brightness-95 transition flex justify-between items-center",
                                    option === currentOption &&
                                        "color-content-accent",
                                )}
                                onClick={() => onOptionChange(option)}
                            >
                                {option}
                                {option === currentOption && (
                                    <CheckIcon
                                        className="color-content-accent"
                                        width={20}
                                        height={20}
                                    />
                                )}
                            </DropdownMenu.Item>
                        ))}

                        <DropdownMenu.Separator className="DropdownMenuSeparator" />
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </div>
    );
}

export default DropdownList;
