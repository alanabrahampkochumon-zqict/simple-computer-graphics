type DropdownListProps = {
    label: string;
    currentOption: string;
    options: string[];
    onOptionChange: (option: string) => void;
};

import { Select, SelectItem } from "./Dropdown";

function DropdownList({
    label,
    currentOption,
    options,
    onOptionChange,
}: DropdownListProps) {
    console.log(currentOption);
    return (
        <Select label={label} defaultValue={currentOption}>
            {options.map((option) => (
                <SelectItem key={option} onClick={() => onOptionChange(option)}>
                    {option}
                </SelectItem>
            ))}
        </Select>
    );
}

export default DropdownList;
