import  { ChangeEvent } from "react";

interface SelectProps {
  value: number | string; // Assuming value can be either number or string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; label: string }[];
  label: string;
  isDisable?: boolean;
}

export const Select = ({
  value,
  onChange,
  options,
  label,
  isDisable,
}: SelectProps) => {
  return (
    <div className="flex items-center justify-center gap-2 ">
       
      <label htmlFor={label} className="block text-sm font-medium text-black">
        {label}
      </label>
      <select
        id={label}
        name="select"
        value={value}
        onChange={onChange}
        disabled={isDisable}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
