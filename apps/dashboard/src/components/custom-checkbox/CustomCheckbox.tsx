import React, { useId } from "react";

type Props = {
  text: string;
  value: any;
  setValue: any;
  description?: string;
};

const CustomCheckbox = ({ text, value, setValue, description }: Props) => {
  const handleCheckboxChange = () => {
    setValue(!value);
  };

  const id = useId();
  return (
    <div className={`flex items-center space-x-2`}>
      <div
        className={`${description ? "items-start " : "items-center "} flex flex-row `}
      >
        <input
          id={id}
          type="checkbox"
          value={value}
          checked={value}
          onChange={handleCheckboxChange}
          className="w-4 h-4 text-cyan-600 bg-zinc-100 pt-1 border-zinc-300 rounded-lg dark:ring-offset-zinc-800 dark:bg-zinc-700 dark:border-zinc-600"
        />
        <div className="flex flex-col ms-2">
          <label
            htmlFor={id}
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            {text}
          </label>
          {description && (
            <p className="text-muted-foreground light-text text-xs">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCheckbox;
