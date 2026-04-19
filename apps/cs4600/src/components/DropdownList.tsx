type DropdownListProps = {
    label: string;
    currentOption: string;
    options: string[];
    onOptionChange: (option: string) => void;
};

import { Select, SelectItem } from "./react-aria/Dropdown";

function DropdownList({
    label,
    currentOption,
    options,
    onOptionChange,
}: DropdownListProps) {
    console.log("CurrentOption", currentOption);
    return (
        <Select
            label={label}
            defaultValue={currentOption}
            value={currentOption}
            onChange={(option) =>
                onOptionChange(option?.toString() || options[0])
            }
        >
            {options.map((option) => (
                <SelectItem id={option} key={option}>
                    {option}
                </SelectItem>
            ))}
        </Select>
    );
}

export default DropdownList;
