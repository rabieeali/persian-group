"use client";

import { FC } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

const InputField: FC<InputFieldProps> = ({ label, name, type = "text", value, onChange, placeholder, error }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <label htmlFor={name} className="text-gray-700 font-bold text-sm">{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 bg-gray-100 rounded-3xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default InputField;
