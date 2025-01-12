import React, { FC } from "react";

interface SearchInputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput: FC<SearchInputProps> = ({
  value,
  handleChange,
  placeholder = "Поиск",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="bg-[rgb(248,249,254)] w-full h-11 rounded-[10px] px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(194,243,119)] mb-4 transition duration-200 ease-in-out"
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
