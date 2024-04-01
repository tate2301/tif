import React from "react";

type Props = {
  text: string;
  value: any;
  setValue: any;
};

const CustomCheckbox = ({ text, value, setValue }: Props) => {

    const handleCheckboxChange = () => {
        setValue(!value);
      };

      
    console.log('value selected: ', value)
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value={value}
          onChange={handleCheckboxChange}
          className="w-4 h-4 text-cyan-600 bg-zinc-100 border-zinc-300 rounded-lg dark:ring-offset-zinc-800 dark:bg-zinc-700 dark:border-zinc-600"
        />
        <label
          htmlFor="default-checkbox"
          className="ms-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          {text}
        </label>
      </div>
    </div>
  );
};

export default CustomCheckbox;
