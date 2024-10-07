import React from "react";

export default function Select({
  options,
  selected,
  onChange,
}: {
  options: string[];
  selected: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select
      className="bg-s border-2 border-p rounded-md"
      value={selected}
      onChange={onChange}
    >
      {options.map((option: string) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
