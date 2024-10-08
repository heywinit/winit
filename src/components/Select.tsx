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
      className="bg-black border-2 border-p p-2 py-1 w-full focus:outline-none"
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
