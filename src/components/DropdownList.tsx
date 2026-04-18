import { DropdownMenu } from "radix-ui";
// import { ReactComponent as ChevronDown } from "../assets/icon/chevron-down.svg"; // TODO: Fix
import Label from "./Label";
type DropdownListProps = {
    label: string;
    currentOption: string;
    options: string[];
    onOptionChange: (option: string) => void;
};

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
                        className="color-surface-secondary rounded-2xl pl-4 pr-4 pt-3 pb-3 flex gap-2"
                        aria-label="Customise options"
                    >
                        <span className="flex-1 text-left color-content-primary text-base font-normal">
                            {currentOption}
                        </span>
                        {/* <ChevronDown /> */}
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className="color-surface-primary w-[320px] shadow-xl p-8 pt-4 pb-4 rounded-2xl"
                        sideOffset={5}
                    >
                        {options.map((option) => (
                            <DropdownMenu.Item
                                className="p-4 pl-2 pr-2 text-base"
                                onClick={() => onOptionChange(option)}
                            >
                                {option}
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
