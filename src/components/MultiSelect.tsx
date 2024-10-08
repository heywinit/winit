import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function MultiSelect({
  options,
  selected,
  setSelected,
}: {
  options: { key: string; value: string }[];
  selected: string[];
  setSelected: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const resetSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected([]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative lg:w-48 w-full" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-2 py-0.5 bg-s border-2 border-p shadow-sm flex justify-between items-center"
      >
        <span>
          {selected.length ? `${selected.length} selected` : "select options"}
        </span>
        <div className="flex items-center">
          {selected.length > 0 && (
            <X
              className="w-4 h-4 mr-1 text-gray-400 cursor-pointer"
              onClick={resetSelection}
            />
          )}
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-black border-2 border-p shadow-lg">
          {options.map((option) => (
            <div
              key={option.key}
              className="flex items-center p-2 py-1 hover:bg-p cursor-pointer"
              onClick={() => toggleOption(option.value)}
            >
              <input
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={() => {}}
                className="mr-2"
                color="black"
              />
              <span>{option.key}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
