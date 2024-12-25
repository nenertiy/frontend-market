import React, { FC } from "react";

interface SearchInputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput: FC<SearchInputProps> = ({
  value,
  handleChange,
  placeholder = "Search",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="w-full h-11 rounded-[10px] px-3 py-2 border border-[rgb(194,243,119)] focus:outline-none focus:ring-2 focus:ring-[rgb(194,243,119)] mb-4"
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
