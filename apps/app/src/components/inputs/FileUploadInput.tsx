import React from "react";

type Props = {
  value: any;
  setValue: any;
  heading?: string;
  optional?: boolean;
};

function FileUploadInput({ value, setValue, heading, optional }: Props) {
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
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-40 border-2 border-zinc-300 border-dashed rounded-lg cursor-pointer bg-zinc-50 dark:hover:bg-bray-800 dark:bg-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:hover:border-zinc-500 dark:hover:bg-zinc-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-zinc-500 dark:text-zinc-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            value={value}
            onChange={(e: any) => setValue(e.target.files[0])}
            type="file"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}

export default FileUploadInput;
