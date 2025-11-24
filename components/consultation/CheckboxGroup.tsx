"use client";

import { FC } from "react";

interface CheckboxItem {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  label: string;
  options: CheckboxItem[];
  selectedValues: string[];
  onChange: (value: string) => void;
  error?: string;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({ label, options, selectedValues, onChange, error }) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-gray-700 font-bold text-sm mb-2">{label}</label>
      <div className="flex flex-wrap gap-3 pr-1">
        {options.map((item) => (
          <label
            key={item.value}
            className="border border-gray-300 bg-gray-100 rounded-3xl font-bold flex items-center gap-2 text-xs text-gray-700 cursor-pointer select-none py-2 px-4 w-fit"
          >
            <input
              type="checkbox"
              checked={selectedValues.includes(item.value)}
              onChange={() => onChange(item.value)}
              className="w-4 h-4 accent-purple-600 cursor-pointer"
            />
            {item.label}
          </label>
        ))}
      </div>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default CheckboxGroup;
