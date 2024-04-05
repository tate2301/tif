import React from "react";

type Props = {
  value: any;
  setValue: any;
  heading?: string;
  placeholder: string;
  textarea?: boolean;
  rows?: number;
  optional?: boolean;
  type?: string;
};

function CustomInput({
  value,
  setValue,
  heading,
  placeholder,
  textarea,
  rows,
  optional,
  type,
}: Props) {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex flex-row items-center space-x-1">
        {heading && (
          <p className="text-sm text-zinc-700 capitalize font-medium">
            {heading}
          </p>
        )}
        {optional && (
          <p className="text-xs bg-secondary p-0.5 rounded font-medium light-text">
            (Optional)
          </p>
        )}
      </div>

      {textarea ? (
        <textarea
          rows={rows ? rows : 3}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className=" bg-primary main-border shadow-sm p-2 text-sm outline-none rounded-lg"
        />
      ) : (
        <input
          type={type ? type : "text"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className=" bg-primary main-border shadow-sm p-2 text-sm outline-none rounded-lg"
        />
      )}
    </div>
  );
}

export default CustomInput;
