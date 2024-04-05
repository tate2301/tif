import React, { HTMLProps } from 'react'

type Props = {
  value: any
  setValue: any
  heading?: string
  placeholder: string
}

function CustomInput({ value, setValue, heading, placeholder, ...rest }:Props) {
  return (
    <div className="flex flex-col space-y-2">
      {heading && (
        <p className="text-xs font-semibold capitalize text-zinc-500">{heading}</p>
      )}
      <input
        {...rest}
        type="text"
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        className=" border-zinc-200 border focus:bg-transparent shadow-sm focus:border-zinc-400/30 focus:shadow-sm p-2 outline-none rounded-lg"
      />
    </div>
  )
}

export default CustomInput
